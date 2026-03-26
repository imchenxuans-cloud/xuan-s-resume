/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  Camera, 
  PenTool, 
  Database, 
  Cpu, 
  ChevronRight,
  Globe,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Design Constants ---
const COLORS = {
  bg: '#FDFCFB', // Warm paper white
  ink: '#1A1A1A',
  accent: '#5A5A40', // Olive/Earth tone
  muted: '#8E8E8E',
  border: '#E5E3E0'
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-[#5A5A40] selection:text-white" style={{ backgroundColor: COLORS.bg, color: COLORS.ink }}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 border-[#E5E3E0]' : 'bg-transparent py-6 border-transparent'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <span className="font-serif italic text-xl tracking-tight">Chen Xuan.</span>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-60">
            <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
            <a href="#skills" className="hover:opacity-100 transition-opacity">Capabilities</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 border border-[#5A5A40]/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#5A5A40] bg-[#5A5A40]/5">
              Creative Resource Architect & Cultural Researcher
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              陈 萱 <span className="italic font-light opacity-40">/ Xuan</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed opacity-80 font-serif italic">
              “致力于在感性创意与理性架构之间寻找平衡。以深度内容策划驱动品牌叙事，利用 AI 工具优化生产流程，在文化田野中挖掘创意灵感。”
            </p>
            
            <div className="flex flex-wrap gap-6 pt-8 text-sm border-t border-[#E5E3E0]">
              <div className="flex items-center gap-2 opacity-60">
                <Mail className="w-4 h-4" /> 563280351@qq.com
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <Phone className="w-4 h-4" /> (+86) 13157750268
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <MapPin className="w-4 h-4" /> Beijing, China
              </div>
              <a href="#" className="flex items-center gap-2 text-[#5A5A40] font-bold hover:underline underline-offset-4">
                <Globe className="w-4 h-4" /> View Portfolio <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white border-y border-[#E5E3E0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] sticky top-32">Professional Experience</h2>
            </div>
            <div className="md:col-span-3 space-y-20">
              {/* Meituan Full-time */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-serif italic">北京三快信息科技有限公司 (美团)</h3>
                  <span className="text-xs font-mono opacity-40">2023.08 — Present</span>
                </div>
                <div className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">营销资源架构与项目管控</div>
                <ul className="space-y-4 text-sm leading-relaxed opacity-80">
                  <li className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
                    <span><strong className="text-black">资源配置与效能优化</strong>：主导 150+ 营销项目全生命周期管理，通过动态投入策略确保创意项目在关键节点的资源覆盖率与 ROI 最大化。</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
                    <span><strong className="text-black">项目管理系统架构</strong>：自主产出部门级数字化管理系统，实现从需求发起、到效果复盘的闭环，显著提升资源流转效率。</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
                    <span><strong className="text-black">AI 工作流重构</strong>：利用 <strong>OpenClaw</strong> 优化创意协作流程，降低跨部门沟通成本 30%，实现生产力架构转型。</span>
                  </li>
                </ul>
              </motion.div>

              {/* Meituan Intern */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-serif italic">北京三快信息科技有限公司 (美团)</h3>
                  <span className="text-xs font-mono opacity-40">2022.08 — 2022.12</span>
                </div>
                <div className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">在线营销策略 (实习)</div>
                <ul className="space-y-4 text-sm leading-relaxed opacity-80">
                  <li className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
                    <span><strong className="text-black">内容美学标准化</strong>：建立审美与商业平衡的判断维度，指导 80+ 渠道 Brief 撰写，助力广告转化率提升 118%。</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
                    <span><strong className="text-black">渠道与效果营销</strong>：负责广告效果营销对接，维护 80+ 网盟及媒体渠道，通过流程优化减轻 1/5 人力负担，体现跨平台沟通与资源管理能力。</span>
                  </li>
                </ul>
              </motion.div>

              {/* Didi */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-serif italic">北京小桔科技有限公司 (滴滴)</h3>
                  <span className="text-xs font-mono opacity-40">2021.06 — 2021.09</span>
                </div>
                <div className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">产品增长方向 (实习)</div>
                <ul className="space-y-4 text-sm leading-relaxed opacity-80">
                  <li className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
                    <span><strong className="text-black">增长路径优化</strong>：参与多线工程管理与产品需求跟进，撰写 PRD 并推动上线 3+ 新产品功能，通过流程优化节省运营沟通成本。</span>
                  </li>
                </ul>
              </motion.div>

              {/* Kuaishou */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-serif italic">北京快手科技有限公司</h3>
                  <span className="text-xs font-mono opacity-40">2021.03 — 2021.05</span>
                </div>
                <div className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">电商行业运营 (实习)</div>
                <ul className="space-y-4 text-sm leading-relaxed opacity-80">
                  <li className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
                    <span><strong className="text-black">A级创意策划</strong>：策划执行 8000+ 字深度方案，产出 1.9W+ 优质短视频，总播放量突破 9000W+。</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 opacity-20" />
                    <span><strong className="text-black">创作者与新媒体运营</strong>：建联并维护近 500 位重点作者及 MCN，负责美妆标签结构化对齐及账号运营，实现单月涨粉 1W+。</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] sticky top-32">Selected Projects</h2>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 gap-8">
              {/* Field Research */}
              <div className="p-8 rounded-3xl border border-[#E5E3E0] bg-white hover:shadow-xl hover:shadow-[#5A5A40]/5 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif italic">皖南及黔东南文化实地调研</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-70 mb-6">
                  深入古村落及少数民族聚落，通过民族志方法记录文化变迁。产出系列速写作品及主题摄影集，将调研成果转化为具备人文深度的文旅品牌原型。
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full border border-[#E5E3E0] text-[10px] font-bold uppercase opacity-50">Field Research</span>
                  <span className="px-3 py-1 rounded-full border border-[#E5E3E0] text-[10px] font-bold uppercase opacity-50">Photography</span>
                </div>
              </div>

              {/* Brand Planning */}
              <div className="p-8 rounded-3xl border border-[#E5E3E0] bg-white hover:shadow-xl hover:shadow-[#5A5A40]/5 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif italic">品牌策划与创意实践</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-70 mb-6">
                  大学期间主导 10 余项品牌策划案，涵盖快消、互联网及文旅领域。凭借深度的洞察与创意表达，累计获得全国大学生广告艺术大赛等国家级/省级奖项 35 项。
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full border border-[#E5E3E0] text-[10px] font-bold uppercase opacity-50">Brand Strategy</span>
                  <span className="px-3 py-1 rounded-full border border-[#E5E3E0] text-[10px] font-bold uppercase opacity-50">Creative Award</span>
                </div>
              </div>

              {/* Whitepaper */}
              <div className="p-8 rounded-3xl border border-[#E5E3E0] bg-white hover:shadow-xl hover:shadow-[#5A5A40]/5 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif italic">北京文化产业发展白皮书</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-70 mb-6">
                  负责数据复盘与趋势分析。从宏观政策与微观业态双重维度，架构区域文化产业发展的逻辑框架，产出具备决策参考价值的研究成果。
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full border border-[#E5E3E0] text-[10px] font-bold uppercase opacity-50">Industry Analysis</span>
                  <span className="px-3 py-1 rounded-full border border-[#E5E3E0] text-[10px] font-bold uppercase opacity-50">Strategic Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="skills" className="py-24 px-6 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#5A5A40] blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#5A5A40] blur-[120px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5A40]">Capabilities</h2>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <PenTool className="w-5 h-5 opacity-40" />
                  <h4 className="font-serif italic text-xl">视觉与创意设计</h4>
                </div>
                <p className="text-sm opacity-50 leading-relaxed">精通 Adobe 全家桶 (PS/AI/PR/AE/AU)；具备专业级摄影、速写及品牌策划案架构能力。</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 opacity-40" />
                  <h4 className="font-serif italic text-xl">AI 与技术赋能</h4>
                </div>
                <p className="text-sm opacity-50 leading-relaxed">熟练运用 OpenClaw 优化工作流；掌握 SQL、SPSS 进行复杂数据分析与效能评估。</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 opacity-40" />
                  <h4 className="font-serif italic text-xl">研究与分析</h4>
                </div>
                <p className="text-sm opacity-50 leading-relaxed">具备深度的田野调查、文献研究及文化产业逻辑分析能力，擅长产出专业级调研报告。</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 opacity-40" />
                  <h4 className="font-serif italic text-xl">荣誉与语言</h4>
                </div>
                <p className="text-sm opacity-50 leading-relaxed">英语 CET-6 (541)；文学作品多次发表于专业杂志并获全国奖项；获大广赛等 35 项省级以上奖项；省优秀毕业生。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 px-6 border-t border-[#E5E3E0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5A40]">Education</h2>
            </div>
            <div className="md:col-span-3 space-y-12">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-2xl font-serif italic">中国传媒大学</h3>
                  <p className="text-sm opacity-60">广播电视 (文化项目策划与创意设计方向) · 硕士</p>
                  <p className="text-[10px] mt-2 opacity-40 leading-relaxed uppercase tracking-wider">
                    Relevant Courses: 广播电视艺术研究、文化项目策划与管理、文旅演艺与活动策划、文化市场营销、文化企业管理、文化消费研究等
                  </p>
                </div>
                <span className="text-xs font-mono opacity-40">2021 — 2023</span>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-2xl font-serif italic">西南交通大学</h3>
                  <p className="text-sm opacity-60">广告学 · 本科</p>
                  <p className="text-[10px] mt-2 opacity-40 leading-relaxed uppercase tracking-wider">
                    Relevant Courses: 艺术概论、整合营销传播、广告摄影、造型基础与版式设计、视频摄制与编辑、基础写作、市场调查与统计分析等
                  </p>
                </div>
                <span className="text-xs font-mono opacity-40">2017 — 2021</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-[#E5E3E0] text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-serif italic tracking-tight">Let's build something meaningful.</h2>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-[#1A1A1A] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Resume
            </button>
            <button className="px-8 py-3 border border-[#1A1A1A] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all">
              Contact Me
            </button>
          </div>
          <p className="text-[10px] font-mono opacity-30 pt-12">© 2026 CHEN XUAN. BUILT WITH PRECISION & CREATIVITY.</p>
        </div>
      </footer>
    </div>
  );
}
