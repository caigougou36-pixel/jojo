import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Leaf, Hexagon, ArrowUpRight, QrCode, X, Mail, Phone, MapPin, CheckCircle2,
  Settings, Gift, PenTool, ShieldCheck, RefreshCw, Zap, Briefcase, Layers, Handshake, Award, ChevronDown
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { staggerChildren: 0.15 }
};

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-oat-white/80 backdrop-blur-xl border-b border-sage-green/10 shadow-sm"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-green to-teal-800 flex items-center justify-center shadow-lg shadow-sage-green/20 group-hover:scale-105 transition-transform duration-300">
            <Hexagon className="w-6 h-6 text-white absolute opacity-50" />
            <Leaf className="w-5 h-5 text-white relative z-10" />
          </div>
          <span className="text-xl font-bold tracking-tight text-rock-gray">
            上海循旸信息科技有限公司
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['首页', '关于我们', '碳服务', '理迹生活', '合作定制'].map(item => (
            <a key={item} href={`#${item}`} className="text-sm font-medium text-rock-gray/70 hover:text-sage-green transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <button 
          onClick={onContactClick}
          className="hidden md:flex items-center gap-2 bg-teal-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sage-green transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          开启低碳合作之旅
        </button>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="首页" className="min-h-[100dvh] w-full relative flex items-center justify-center overflow-hidden">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2560&auto=format&fit=crop" 
          alt="Deep Forest" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Fades to oat-white at the bottom to blend with the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white/90 via-oat-white/70 to-oat-white"></div>
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center h-full pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onClick={() => document.getElementById('理迹生活')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sage-green/30 bg-white/60 backdrop-blur-md mb-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <span className="flex h-2 w-2 rounded-full bg-sage-green animate-pulse"></span>
          <span className="text-sm font-semibold tracking-wider text-sage-green uppercase">rejinode 理迹生活</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-rock-gray mb-6 leading-tight"
        >
          双碳时代 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-green to-teal-700">绿色伙伴</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-rock-gray/80 mb-10 font-medium flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"
        >
          <span>碳业务全链条服务</span>
          <span className="hidden md:inline text-sage-green/30">|</span>
          <span>低碳产品创新矩阵</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto relative mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('关于我们')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-sage-green text-white px-8 py-4 rounded-full hover:bg-teal-800 transition-all duration-300 shadow-lg shadow-sage-green/30 flex items-center justify-center gap-2 font-medium group"
            >
              绿色服务创新企业
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="关于我们" className="min-h-[100dvh] w-full relative flex items-center overflow-hidden py-24">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
          alt="Forest Path" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Starts with oat-white, fades to semi-transparent, ends with oat-white */}
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white via-oat-white/70 to-oat-white"></div>
      </motion.div>

      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rock-gray mb-2">
              关于我们
            </h2>
            <p className="text-sage-green font-mono uppercase tracking-widest text-sm font-semibold">About Us</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-[60vh]">
          {/* Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="lg:col-span-5 flex flex-col justify-center h-full space-y-10"
          >
            <motion.div variants={fadeIn} className="pl-6 border-l-2 border-sage-green/30 hover:border-sage-green transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-rock-gray">公司定位</h3>
              <p className="text-rock-gray/80 leading-relaxed text-lg">
                创新型低碳综合服务商，专注“双碳”领域的创新型科技企业。
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="pl-6 border-l-2 border-sage-green/30 hover:border-sage-green transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-rock-gray">核心优势</h3>
              <p className="text-rock-gray/80 leading-relaxed text-lg mb-4">
                打通“碳服务+碳产品”双赛道，提供一体化解决方案。
              </p>
              <div className="flex flex-wrap gap-2">
                {['咨询', '技术', '产品', '金融'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm text-teal-800 text-sm font-medium border border-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="pl-6 border-l-2 border-sage-green/30 hover:border-sage-green transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-rock-gray">使命与愿景</h3>
              <p className="text-rock-gray/80 leading-relaxed text-lg">
                助力企业从“被动合规”转向“主动获益”；成为国内领先的低碳转型伙伴。
              </p>
            </motion.div>
          </motion.div>

          {/* Large Image */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="lg:col-span-7 h-[60vh] lg:h-full rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-sage-green/10 group border-4 border-white/50"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Corporate Office" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rock-gray/60 via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CarbonServices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [activeService, setActiveService] = useState<number>(0);
  const [hoveredDetailsIndex, setHoveredDetailsIndex] = useState<number | null>(null);

  const services = [
    { 
      num: "01", 
      title: "碳管理与咨询服务", 
      desc: "为企业搭建碳管理基础框架，明确低碳转型方向。", 
      hoverDetails: [
        { title: "基础诊断与规划", content: "包含企业运营全流程碳排放摸底、出具诊断报告；定制碳达峰/碳中和路线图，分解减排指标与行动方案。" },
        { title: "核算与合规", content: "遵循ISO 14064标准进行企业级/产品级碳核算与数据溯源；提供配额申报、履约代办及国内外平台（如CDP、ESG）排放数据披露指导。" },
        { title: "体系搭建与优化", content: "制定企业碳管理制度与流程，搭建内部组织架构，并定期跟踪优化转型策略。" }
      ],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      num: "02", 
      title: "碳交易与碳资产管理", 
      desc: "让碳资产成为企业“隐形财富”，实现价值最大化。", 
      hoverDetails: [
        { title: "资产盘点与规划", content: "梳理可交易碳资产（配额、CCER潜力等），评估增值空间，并制定个性化交易及避险策略。" },
        { title: "全品类交易服务", content: "覆盖全国/地方碳配额、CCER、绿电/绿证；提供自营交易代理、经纪咨询与撮合服务。" },
        { title: "资产增值与托管", content: "专业团队代管理碳资产，并提供碳资产质押融资、回购及跨市场套利等延伸服务。" }
      ],
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      num: "03", 
      title: "降碳技术研发与创新", 
      desc: "为企业匹配落地性最强的降碳技术，快速嫁接成熟资源。", 
      hoverDetails: [
        { title: "技术适配与对接", content: "基于企业特性筛选节能降耗、零碳工艺等技术，提供可行性分析，并搭建优质技术供应商合作桥梁。" },
        { title: "方法学与项目开发", content: "协助企业研究及申请CCER方法学备案；提供零碳/负碳项目（如碳汇林、节能改造）从设计、备案到验收的全程咨询。" }
      ],
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      num: "04", 
      title: "绿色金融与碳融资", 
      desc: "打通“碳资产-金融资源”通道，解决转型资金短缺问题。", 
      hoverDetails: [
        { title: "融资解决方案", content: "提供碳配额质押、碳资产回购及托管融资服务；对接银行绿色信贷产品，协助准备材料以提升审批率。" },
        { title: "金融产品与投资对接", content: "联合金融机构设计“碳减排账户”等定制产品；为低碳项目对接私募碳基金，协助编写商业计划书。" },
        { title: "信用提升与价值传导", content: "建立碳信用评价体系，优化ESG报告碳指标以获取优质评级；开展绿金吸纳能力培训。" }
      ],
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      num: "05", 
      title: "低碳能力建设服务", 
      desc: "针对不同岗位提供分层培训与组织赋能，保障转型持续推进。", 
      hoverDetails: [
        { title: "定制化培训", content: "分为基础层（政策趋势/核算基础）、专业层（交易实务/产品碳足迹）、管理层（战略规划/ESG整合），通过线上线下结合授课并颁发证书。" },
        { title: "组织赋能与流程搭建", content: "设计宣传物料及策划员工低碳活动以建设低碳文化；搭建碳数据收集上报的标准化流程与绩效考核机制。" }
      ],
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      num: "06", 
      title: "企业碳管理数字化平台建设", 
      desc: "以数字化工具打通碳全流程，实现数据化、智能化管理。", 
      hoverDetails: [
        { title: "平台核心功能", content: "数据采集与管理：多维度数据接入、异常清洗与数据流转溯源。\n碳核算与分析：内置国际标准算法一键生成报告，智能识别高排放环节并预测趋势。" },
        { title: "延伸功能与价值", content: "合规与履约：实时同步国内外政策，设置履约预警并自动生成披露报告。\n可视化与预警：全景仪表盘直观展示数据，支持自定义报表、多级预警及移动端查看。减少80%人工操作成本。" }
      ],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
    },
  ];

  return (
    <section ref={ref} id="碳服务" className="min-h-[100dvh] w-full relative flex flex-col justify-center overflow-hidden py-24">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2560&auto=format&fit=crop" 
          alt="Green Leaves" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white via-oat-white/80 to-oat-white"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rock-gray mb-2">
            碳业务全链条服务
          </h2>
          <p className="text-teal-800 font-mono uppercase tracking-widest text-sm font-semibold">Carbon Services</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="flex flex-col lg:flex-row gap-6 lg:gap-10 h-[80vh] lg:h-[70vh] w-full"
        >
          {/* Left: Image Display */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full rounded-[2.5rem] overflow-hidden relative shadow-2xl border-4 border-white/50 group bg-rock-gray/10">
            <AnimatePresence>
              <motion.img
                key={activeService}
                src={services[activeService].img}
                alt={services[activeService].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-rock-gray/60 via-transparent to-transparent opacity-60 pointer-events-none z-10"></div>
          </div>

          {/* Right: Vertical Strips Accordion */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-row gap-2 md:gap-3">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <motion.div 
                  layout
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  className={`relative h-full rounded-2xl md:rounded-[2rem] cursor-pointer overflow-hidden border backdrop-blur-md transition-colors duration-500
                    ${isActive ? 'flex-1 bg-white/60 border-white/80 shadow-lg' : 'w-12 md:w-16 flex-shrink-0 bg-white/20 border-white/30 hover:bg-white/40'}
                  `}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Inactive State Content (Vertical Text) */}
                  <div className={`absolute inset-0 flex flex-col items-center py-5 md:py-8 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-200'}`}>
                    <span className="text-lg md:text-2xl font-mono font-bold text-teal-800/40 mb-4">{service.num}</span>
                    <span className="text-rock-gray font-bold tracking-widest whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      {service.title}
                    </span>
                  </div>
                  
                  {/* Active State Content */}
                  <div className={`absolute inset-0 flex flex-col justify-start pt-8 md:pt-12 px-6 md:px-10 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 -translate-y-12 pointer-events-none'}`}>
                    <div className="text-4xl md:text-6xl font-mono font-black text-teal-900/10 mb-3 md:mb-5 flex-shrink-0 tracking-tighter">
                      {service.num}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-teal-800 leading-snug mb-4 flex-shrink-0 whitespace-normal break-words tracking-tight">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-sage-green to-transparent mb-6 rounded-full flex-shrink-0"></div>
                    <div className="overflow-y-auto no-scrollbar pr-2 pb-4 flex-grow flex flex-col">
                      <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">{service.desc}</p>
                      
                      <div className="mt-auto pb-4 flex justify-center w-full">
                        <button 
                          onMouseEnter={() => setHoveredDetailsIndex(index)}
                          className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-teal-900 text-white font-medium text-sm hover:bg-sage-green transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                          查看详情
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Sliding Frosted Glass Card */}
                  <div 
                    onMouseLeave={() => setHoveredDetailsIndex(null)}
                    className={`absolute inset-0 bg-white/95 backdrop-blur-xl border-l border-white/60 pt-6 px-6 pb-0 md:pt-10 md:px-10 md:pb-0 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] z-20 ${hoveredDetailsIndex === index && isActive ? 'translate-y-0' : 'translate-y-full'}`}
                  >
                    <div className="flex items-center justify-between mb-5 flex-shrink-0 border-b border-teal-900/10 pb-4">
                      <span className="text-3xl font-mono font-black text-teal-900/20">{service.num}</span>
                      <button 
                        onClick={() => setHoveredDetailsIndex(null)}
                        className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-900 hover:bg-teal-100 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto no-scrollbar pr-3 pb-10 space-y-5">
                      {service.hoverDetails?.map((detail, idx) => (
                        <div key={idx} className="flex flex-col gap-1.5">
                          <h4 className="text-teal-900 font-bold text-sm md:text-base flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-green shadow-sm flex-shrink-0"></span>
                            {detail.title}
                          </h4>
                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-line pl-4">
                            {detail.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GreenProducts() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products = [
    { 
      title: "文创办公组合", 
      img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop", 
      details: "为企业与个人量身定制兼顾实用性与品牌形象的“办公场景绿色解决方案”。",
      items: [
        {
          name: "环保竹木夜灯蓝牙音箱\n（含无线充电手机支架）",
          img: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=800&auto=format&fit=crop",
          material: "天然竹木 + ABS 环保塑料。",
          features: "三功能合一（夜灯 + 音箱 + 无线充电），具备节能低功耗的优势；外观采用简约北欧风设计，适配各类办公场景。"
        },
        {
          name: "多功能无线充电笔筒",
          img: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=800&auto=format&fit=crop",
          material: "竹子、麦秸秆、ABS塑料。",
          features: "集合无线充电与收纳功能，能让桌面保持整洁有序，且节能高效。"
        },
        {
          name: "竹木签字笔",
          img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800&auto=format&fit=crop",
          material: "天然竹木 + 环保金属配件。",
          features: "保留原木纹理，手感舒适；支持替换笔芯以减少浪费，并采用可回收的牛皮纸盒环保包装。"
        },
        {
          name: "环保礼盒套装\n（笔记本与笔组合）",
          img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
          material: "内页采用再生纸，封面及笔身为环保再生材料（如天然竹木、环保咖啡渣、软木等）。",
          features: "提供多种环保材质组合搭配（如竹木组合、咖啡渣组合、软木组合），兼顾实用性与品牌形象，适合商务馈赠。"
        }
      ]
    },
    { 
      title: "绿色疗愈小物", 
      img: "https://images.unsplash.com/photo-1608501821300-4f99e58bba77?q=80&w=800&auto=format&fit=crop", 
      details: "聚焦家居生活场景，打造“环保+美感+实用”的疗愈系产品，在降低家居碳排放的同时提升生活幸福感。",
      items: [
        {
          name: "竹木加湿器",
          img: "https://images.unsplash.com/photo-1585569695289-b61139ce9e2c?q=80&w=800&auto=format&fit=crop",
          material: "天然樟木 / 黑桃木 + 进口杜邦纸。",
          features: "采用超声波雾化技术，静音运行且节能低耗；天然材质无异味，简约复古风设计可完美融入家居装饰。"
        },
        {
          name: "手提纸灯",
          img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
          material: "杜邦纸 + 竹子底座。",
          features: "内置 LED 节能光源，支持可折叠收纳；安全无高温，提供多种造型，适用于卧室、书房、露营等多场景氛围营造。"
        },
        {
          name: "竹木无线充电移动电源",
          img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800&auto=format&fit=crop",
          material: "天然竹木外壳。",
          features: "天然竹木外壳环保安全且手感温润；配备 2个 USB 接口，支持多设备同时充电。"
        },
        {
          name: "多功能香熏机\n（白噪音/蓝牙音箱）",
          img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop",
          material: "内置 4000 毫安环保锂电池。",
          features: "集合了 4种白噪音、蓝牙音箱、七彩仿真火焰与精油香熏功能；采用超声波雾化，精油利用率高，低功耗设计保证续航持久。"
        }
      ]
    },
    { 
      title: "户外绿游装备", 
      img: "https://images.unsplash.com/photo-1504280390227-351a2d052e5b?q=80&w=800&auto=format&fit=crop", 
      details: "适配出行与购物等场景，打造“耐用+环保+便携”的户外装备，有效减少一次性用品消耗与碳排放。",
      items: [
        {
          name: "R PET 可折叠太阳帽",
          img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800&auto=format&fit=crop",
          material: "再生塑料 R PET 面料（由回收塑料瓶制成）。",
          features: "轻便透气，可折叠收纳；防晒指数高达 UPF50+，设计简约百搭且易于清洗。"
        },
        {
          name: "R PET 竹木手柄自动雨伞",
          img: "https://images.unsplash.com/photo-1556888335-95371827d5fb?q=80&w=800&auto=format&fit=crop",
          material: "再生塑料 R PET 面料（伞面）+ 天然竹木材质（手柄）。",
          features: "伞面防水、耐磨且可回收；支持自动开合，轻便易携且抗风性强，有效减少塑料污染。"
        },
        {
          name: "软木便携户外四件套",
          img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop",
          material: "天然软木。",
          features: "包含手摇咖啡机、手冲壶、咖啡杯及收纳袋；轻便易携、耐用防摔，天然材质无异味，非常适合露营、野餐等户外场景。"
        },
        {
          name: "咖啡渣随行杯",
          img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
          material: "食品级 PP + 30% 咖啡渣再生原料。",
          features: "杯底配有吸盘设计，防滑防倒且保温效果佳；核心亮点是实现了咖啡渣回收利用，有效减少废弃物污染。"
        }
      ]
    },
    { 
      title: "永续开运系列", 
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop", 
      details: "聚焦节日与特殊场合，打造“环保+创意+氛围”的特色产品，替代传统高污染高消耗的节庆用品以传递可持续理念。",
      items: [
        {
          name: "十八纸创意小灯笼",
          img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
          material: "环保纸。",
          features: "内置 LED 节能光源，支持可折叠收纳，使用安全无隐患；拥有苹果、梨、柿子等吉祥外观造型，非常适合春节、中秋等节庆场合。"
        },
        {
          name: "十八纸创意香熏",
          img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop",
          material: "环保纸质（可回收、可降解）。",
          features: "设计独特，兼具香熏功能与装饰性；采用如薰衣草、柑橘等天然植物精油香型。"
        },
        {
          name: "十八纸弥香宝葫芦",
          img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop",
          material: "环保纸。",
          features: "内置香包使香气持久；葫芦造型寓意吉祥，不仅适合节日装饰，也是馈赠亲友的佳品。"
        },
        {
          name: "福禄成双筷杯套装",
          img: "https://images.unsplash.com/photo-1613550085810-75618544c4e7?q=80&w=800&auto=format&fit=crop",
          material: "金丝红檀（筷子）、高温白玉陶瓷（杯子）。",
          features: "内含福禄中华筷2双、福禄字杯2支及葫芦筷架2个；材质天然环保，设计精美，寓意美好，适合家庭自用与节日礼赠。"
        }
      ]
    },
  ];

  const tags = ['简约生活', '友善环境', '化繁为简', '和谐共好', '文创办公', '绿色疗愈', '户外绿游', '永续开运', '循环复用', '再生材质', '全生命周期', '资源高值化', '绿色材质', '单一材质', '模块化设计', '可回收包装', '智能低碳'];

  return (
    <section ref={ref} id="理迹生活" className="min-h-[100dvh] w-full relative flex flex-col justify-center overflow-hidden py-24">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?q=80&w=2560&auto=format&fit=crop" 
          alt="Bamboo Texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white via-oat-white/80 to-oat-white"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Title Area */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="lg:w-1/3 flex flex-col justify-center items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sage-green/30 bg-sage-green/10 mb-8">
              <span className="text-xs font-bold tracking-wider text-sage-green uppercase">rejinode 理迹生活</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-rock-gray tracking-tight">
              绿色创新品牌
            </h2>
            <p className="text-sage-green font-mono uppercase tracking-widest text-sm font-semibold mb-6">Green Products</p>
          </motion.div>

          {/* Right 2x2 3D Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="lg:w-2/3 grid grid-cols-2 gap-6 w-full max-w-4xl"
            style={{ perspective: "1200px" }}
          >
            {products.map((product, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5, rotateX: index < 2 ? 5 : -5, zIndex: 10 }}
                onClick={() => setActiveProduct(index)}
                className="group cursor-pointer rounded-[2rem] overflow-hidden relative shadow-2xl border-2 border-white/50 h-[30vh] lg:h-[40vh] transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-rock-gray/90 via-rock-gray/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center text-center transform translate-z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                    {product.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee at the absolute bottom of the section */}
      <div className="absolute bottom-0 left-0 w-full py-4 bg-sage-green/20 backdrop-blur-md border-t border-white/20 z-20">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
            <div key={i} className="flex items-center mx-6">
              <span className="text-lg font-bold text-teal-900 uppercase tracking-widest">{tag}</span>
              <span className="mx-6 text-teal-900/30">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover/Click Modal Popup */}
      <AnimatePresence>
        {activeProduct !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-rock-gray/60 backdrop-blur-md p-4 md:p-6"
            onClick={() => setActiveProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/95 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] max-w-6xl w-full shadow-2xl border border-white relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setActiveProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-rock-gray/5 flex items-center justify-center text-rock-gray hover:bg-sage-green hover:text-white transition-colors z-20 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-8 text-center shrink-0 max-w-4xl mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-teal-950">
                  {products[activeProduct].title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-sage-green to-transparent mx-auto mb-4 rounded-full"></div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {products[activeProduct].details}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto no-scrollbar pb-4 px-2">
                {products[activeProduct].items?.map((item, idx) => (
                  <div key={idx} className="flex flex-col group/card [perspective:1000px]">
                    {/* Flip Card Container */}
                    <div className="relative w-full aspect-square mb-4 rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)] cursor-pointer shadow-md hover:shadow-xl">
                      
                      {/* Front of card */}
                      <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden bg-white">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      {/* Back of card */}
                      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-teal-900 text-white p-5 md:p-6 overflow-y-auto no-scrollbar flex flex-col justify-center border border-teal-800">
                        <div className="space-y-4">
                          <div>
                            <span className="text-sage-green text-xs font-bold uppercase tracking-widest mb-1.5 block">材质</span>
                            <p className="text-xs md:text-sm leading-relaxed text-white/90">{item.material}</p>
                          </div>
                          <div className="w-full h-px bg-white/10"></div>
                          <div>
                            <span className="text-sage-green text-xs font-bold uppercase tracking-widest mb-1.5 block">特点</span>
                            <p className="text-xs md:text-sm leading-relaxed text-white/90">{item.features}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Module Name & Highlight below image */}
                    <div className="text-center px-2 flex-grow flex items-start justify-center">
                      <h4 className="text-teal-950 font-bold text-sm md:text-base whitespace-pre-line leading-snug">{item.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Solutions() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const modules = [
    {
      title: "企业专属定制",
      icon: <Award className="w-8 h-8" />,
      services: ["品牌定制", "功能定制", "场景定制"],
      desc: "为您打造独一无二的专属低碳产品。我们支持在产品外观及包装印制企业LOGO与宣传标语；可根据实际业务需求灵活调整特定功能；并为员工福利、商务馈赠等不同应用场景量身设计专属套装。"
    },
    {
      title: "全效服务保障",
      icon: <ShieldCheck className="w-8 h-8" />,
      services: ["品质保障", "售后支持", "快速响应"],
      desc: "全方位保障您的合作体验。我们承诺所有产品均提供权威的环保与质量检测报告；如遇质量问题免费更换并提供回收渠道；依托高效供应链，实现定制订单快速打样与极速交货。"
    },
    {
      title: "灵活合作方案",
      icon: <Handshake className="w-8 h-8" />,
      services: ["碳业务合作", "低碳产品合作", "组合合作方案"],
      desc: "精准适配您的不同发展需求。提供针对单一碳需求的项目制或模块化服务；提供享专属折扣的低碳产品批量采购与定制；主推“碳业务年度服务+员工低碳产品福利”一站式深度打包组合，实现长效共赢。"
    }
  ];

  return (
    <section ref={ref} id="合作定制" className="min-h-[100dvh] w-full relative flex flex-col justify-center overflow-hidden py-24">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2560&auto=format&fit=crop" 
          alt="Mountains" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Fades from oat-white to teal-950 to transition smoothly into the dark footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-oat-white via-oat-white/80 to-teal-950/90"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
        
        {/* Header Section - Reverted to original left-aligned */}
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rock-gray mb-2">
              合作与定制
            </h2>
            <p className="text-sage-green font-mono uppercase tracking-widest text-sm font-semibold">Solutions & Cooperation</p>
          </div>
        </motion.div>

        {/* 3-Column Minimalist Accordion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              className="group relative bg-white/30 hover:bg-white/50 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-fit cursor-pointer"
            >
              {/* Top Row: Icon, Title, and Dropdown Hint */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-teal-950 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-sage-green transition-all duration-500 flex-shrink-0">
                  {mod.icon}
                </div>
                <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-teal-900 shadow-sm border border-white/60 group-hover:rotate-180 transition-transform duration-500">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-teal-950 mb-6">
                {mod.title}
              </h3>
              
              {/* Services Tags */}
              <div className="flex flex-wrap gap-2">
                {mod.services.map((service, idx) => (
                  <span key={idx} className="px-4 py-2 bg-teal-900/5 border border-teal-900/10 rounded-full text-sm font-medium text-teal-800 group-hover:bg-teal-900/10 transition-colors duration-500">
                    {service}
                  </span>
                ))}
              </div>

              {/* Expandable Description using CSS Grid */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <div className="pt-6 mt-6 border-t border-teal-900/10">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Footer({ onContactClick }: { onContactClick: () => void }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <footer ref={ref} className="min-h-[100dvh] w-full relative flex flex-col justify-between overflow-hidden pt-24 pb-12">
      {/* Eco Background Image with Seamless Gradient Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?q=80&w=2560&auto=format&fit=crop" 
          alt="Forest Canopy" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Starts with teal-950 to match previous section, stays dark for footer text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/90 via-teal-900/95 to-teal-950"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center py-12"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-sage-green/20 flex items-center justify-center mb-6 border border-sage-green/30">
            <Leaf className="w-8 h-8 text-sage-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            开启低碳合作之旅
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            无论您是寻求专业的碳管理咨询，还是希望定制专属的绿色环保产品，循旸信息科技都将是您最可靠的绿色伙伴。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto bg-sage-green text-white px-8 py-3 rounded-full hover:bg-white hover:text-teal-900 transition-all duration-300 shadow-xl shadow-sage-green/20 flex items-center justify-center gap-2 text-base font-bold group"
            >
              <Phone className="w-4 h-4" /> 联系我们
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-8">
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Hexagon className="w-4 h-4 text-sage-green"/> 核心业务</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>碳管理与咨询服务</li>
                <li>碳交易与碳资产管理</li>
                <li>绿色金融与碳融资</li>
                <li>企业碳管理数字化平台</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Leaf className="w-4 h-4 text-sage-green"/> 理迹生活</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>文创办公组合</li>
                <li>绿色疗愈小物</li>
                <li>户外绿游装备</li>
                <li>永续开运/节庆</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-sage-green"/> 联系方式</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>上海市黄浦区湖滨路168号</li>
                <li>无限极大厦26楼26115室</li>
                <li>contact@xunyang.tech</li>
                <li>400-123-4567</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-mono">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-sage-green" />
            <span>循旸信息科技 Xunyang Info Tech</span>
          </div>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-teal-950/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-oat-white rounded-3xl overflow-hidden shadow-2xl border border-white/50"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-teal-950 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Left side: Image */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Office Building" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent md:bg-gradient-to-r"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Leaf className="w-8 h-8 mb-2 text-sage-green" />
                  <h3 className="font-bold text-lg">绿色伙伴</h3>
                </div>
              </div>
              
              {/* Right side: Content */}
              <div className="w-full md:w-3/5 p-8 md:p-10 bg-oat-white">
                <h2 className="text-2xl font-bold text-teal-950 mb-6">联系我们</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage-green/10 flex items-center justify-center flex-shrink-0 text-sage-green">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-teal-900 mb-1">公司名称</p>
                      <p className="text-slate-600 text-sm">上海循旸信息科技有限公司</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage-green/10 flex items-center justify-center flex-shrink-0 text-sage-green">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-teal-900 mb-1">公司电话</p>
                      <p className="text-slate-600 text-sm">+86 123 4567 8900</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage-green/10 flex items-center justify-center flex-shrink-0 text-sage-green">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-teal-900 mb-1">公司邮箱</p>
                      <p className="text-slate-600 text-sm">contact@xunyang.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage-green/10 flex items-center justify-center flex-shrink-0 text-sage-green">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-teal-900 mb-1">公司地址</p>
                      <p className="text-slate-600 text-sm leading-relaxed">上海市浦东新区<br/>世纪大道 100 号</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden font-sans selection:bg-sage-green/30 selection:text-rock-gray bg-oat-white">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      <Hero />
      <About />
      <CarbonServices />
      <GreenProducts />
      <Solutions />
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
