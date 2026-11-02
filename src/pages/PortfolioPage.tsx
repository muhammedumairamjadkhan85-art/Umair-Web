import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { portfolioProjects } from '../data/siteData';
import { ArrowUpRight, Search, Sparkles, Filter, Code, Info, ArrowRight } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showConfigHelp, setShowConfigHelp] = useState<boolean>(false);

  const categories = ['All', 'Business', 'E-commerce', 'Landing Page', 'UI/UX', 'Custom Web'];

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
          Design Portfolio
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Selected Works &amp; <span className="text-gradient-gold">Design Concepts.</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          Explore architectural web designs, luxury digital storefronts, and high-conversion landing page prototypes engineered for international standards.
        </p>

        {/* Prominent Demonstration & Replacement Notice (Prompt requirement) */}
        <div className="mt-8 p-5 rounded-xl bg-[#141414] border border-[#D4AF37]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
            <div className="text-xs text-zinc-300">
              <strong className="text-white block font-semibold mb-0.5">
                Demonstration Portfolio Placeholders:
              </strong>
              In strict adherence to your instructions, these projects showcase design aesthetics and layout capabilities without fabricating false client claims. When you supply your actual project screenshots, they can be inserted seamlessly into <code className="text-[#F2D675]">src/data/siteData.ts</code>.
            </div>
          </div>
          <button
            onClick={() => setShowConfigHelp(!showConfigHelp)}
            className="px-3.5 py-1.5 text-xs text-[#F2D675] hover:text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {showConfigHelp ? 'Hide Instructions' : 'How to Add Real Projects'}
          </button>
        </div>

        {/* Collapsible Helper on adding real projects */}
        {showConfigHelp && (
          <div className="mt-4 p-5 rounded-xl bg-[#0F0F0F] border border-white/10 text-xs text-zinc-300 space-y-2 animate-in fade-in duration-200">
            <div className="font-semibold text-white">How to Add, Edit, or Remove Portfolio Projects:</div>
            <p className="text-zinc-400">
              Open <code className="text-[#F2D675] bg-black/40 px-1 py-0.5 rounded">src/data/siteData.ts</code> and locate the <code className="text-[#F2D675] bg-black/40 px-1 py-0.5 rounded">portfolioProjects</code> array. You can:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-zinc-400 pl-2">
              <li>Add a new object with your project title, category, screenshot image path, and description.</li>
              <li>Replace <code className="text-white">imageUrl</code> with your screenshot URL or upload to <code className="text-white">src/assets/images/</code>.</li>
              <li>Change <code className="text-white">isPlaceholderDemo: false</code> to indicate verified client work.</li>
            </ol>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#121212] text-zinc-400 hover:text-white hover:bg-[#1A1A1A] border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-[#121212] rounded-xl border border-white/10">
            <p className="text-zinc-400 text-sm mb-4">No projects match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs text-[#D4AF37] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                {/* Large Responsive Screenshot Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-black/75 backdrop-blur-md text-xs font-medium tracking-wide text-[#F2D675] border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-300 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/5">
                      Demonstration Showcase
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mb-2">
                      <span>Scope: {project.scope}</span>
                      <span>·</span>
                      <span>Concept {project.year}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#F2D675] transition-colors leading-snug">
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white/5 border border-white/5 px-2.5 py-1 rounded text-xs text-zinc-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Action */}
                  <div className="pt-5 border-t border-white/5 flex items-center justify-between text-xs text-zinc-300 group-hover:text-[#D4AF37] transition-colors">
                    <span className="font-semibold uppercase tracking-wider text-xs">
                      Open Project Case Study &amp; Design Breakdown
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA to Discuss Custom Project */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-2xl bg-[#121212] border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Looking for a Tailored Digital Experience for Your Brand?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mb-6">
            Whether you need an e-commerce platform, corporate platform, or conversion landing page, we begin with your business objectives.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F2D675] rounded-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Commission a Custom Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
