import type { NextConfig } from "next";
import { ORTER } from "./src/data/kurser";

// Gamla ortsidor som fanns i sitemapen men saknar egen kurs: 301 till kurssidan.
const GAMLA_ORTER = ["solna","sundbyberg","sollentuna","upplands-vasby","sigtuna","marsta","norrtalje","nynashamn","haninge","sodertalje","balsta","uppsala","enkoping","strangnas","eskilstuna","vasteras","koping","sala","fagersta","avesta","borlange","falun","ludvika","mora","gavle","sandviken","soderhamn","bollnas","ljusdal","hudiksvall","harnosand","kramfors","solleftea","ornskoldsvik","umea","skelleftea","lycksele","lulea","pitea","boden","kalix","haparanda","gallivare","kiruna","ostersund","are","sveg","ange","orebro","karlskoga","kristinehamn","karlstad","arvika","saffle","amal","sunne","torsby","hagfors","filipstad","nykoping","trosa","katrineholm","flen","norrkoping","linkoping","motala","mjolby","finspang","vadstena","tranas","huskvarna","mullsjo","nassjo","eksjo","savsjo","vetlanda","varnamo","gislaved","gnosjo","ljungby","vaxjo","alvesta","almhult","kalmar","nybro","emmaboda","oskarshamn","vastervik","vimmerby","hultsfred","visby","karlskrona","ronneby","karlshamn","solvesborg","olofstrom","bromolla","hassleholm","osby","simrishamn","ystad","sjobo","trelleborg","malmo","lund","eslov","hoor","landskrona","astorp","klippan","angelholm","bastad","laholm","falkenberg","varberg","kungsbacka","molndal","partille","lerum","kungalv","stenungsund","uddevalla","trollhattan","vanersborg","stromstad","alingsas","boras","kinna","ulricehamn","skovde","falkoping","skara","lidkoping","vara","mariestad","gotene","tidaholm","hjo","tibro","karlsborg","hyltebruk"];
const behall = new Set(ORTER.map((o) => o.slug));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/ugl/timra", destination: "/ugl/sundsvall", permanent: true },
      ...GAMLA_ORTER.filter((s) => !behall.has(s)).map((s) => ({ source: `/ugl/${s}`, destination: "/kurser", permanent: true })),
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
    ] }];
  },
};

export default nextConfig;
