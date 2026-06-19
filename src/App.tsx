import { useState } from 'react';
import { 
  Globe, 
  CheckCircle2, 
  Search,
  Menu,
  Image as ImageIcon, 
  Video, 
  Lock, 
  Heart, 
  MessageCircle, 
  DollarSign, 
  Bookmark,
  ChevronDown,
  Instagram,
  Twitter,
  Music2,
  MoreVertical
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'posts' | 'media'>('posts');
  const [activeMediaFilter, setActiveMediaFilter] = useState('Todos');
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const mediaImages = [
    "https://ycysjdheofmdwhqkibqf.supabase.co/storage/v1/object/public/img%20e%20videos/Design%20sem%20nome%20(4).jpg",
    "https://ycysjdheofmdwhqkibqf.supabase.co/storage/v1/object/public/img%20e%20videos/Design%20sem%20nome%20(5).jpg",
    "https://ycysjdheofmdwhqkibqf.supabase.co/storage/v1/object/public/img%20e%20videos/Design%20sem%20nome%20(6).jpg",
    "https://ycysjdheofmdwhqkibqf.supabase.co/storage/v1/object/public/img%20e%20videos/Design%20sem%20nome%20(7).jpg",
    "https://ycysjdheofmdwhqkibqf.supabase.co/storage/v1/object/public/img%20e%20videos/Design%20sem%20nome%20(8).jpg",
    "https://ycysjdheofmdwhqkibqf.supabase.co/storage/v1/object/public/img%20e%20videos/Design%20sem%20nome%20(9).jpg"
  ];

  return (
    <div className="min-h-screen bg-privacy-bg pb-12">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-privacy-bg px-4 py-3 flex items-center justify-between">
        <div className="w-8" /> {/* Spacer */}
        <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-0.5 text-black">
          privacy<span className="text-privacy-orange text-3xl leading-none">.</span>
        </h1>
        <button className="p-2 hover:bg-gray-200/50 rounded-full transition-colors">
          <Globe className="w-5 h-5 text-gray-600" />
        </button>
      </header>

      <main className="max-w-2xl mx-auto mt-2 px-4 sm:px-0">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          {/* Banner */}
          <div className="relative h-[85px] bg-gray-200">
            <img 
              src="https://ycysjdheofmdwhqkibqf.supabase.co/storage/v1/object/public/img%20e%20videos/1775192690e71b%20(1).jpg" 
              alt="Banner" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Profile Info Section */}
          <div className="relative px-6 pb-6">
            {/* Stats - Now below banner on the right */}
            <div className="flex justify-end pt-3 gap-3 text-[#333333] text-[11px] sm:text-[13px] font-medium">
              <div className="flex items-center gap-1">
                <ImageIcon className="w-4 h-4 text-[#333333]" />
                <span>102</span>
              </div>
              <div className="flex items-center gap-1">
                <Video className="w-4 h-4 text-[#333333]" />
                <span>43</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-[#333333]" />
                <span>75</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-[#333333]" />
                <span>114.9k</span>
              </div>
            </div>

            {/* Avatar */}
            <div className="absolute -top-10 left-6">
              <div className="relative p-[1px] bg-white rounded-full shadow-sm">
                <img 
                  src="https://i.imgur.com/tA4pBmt.png" 
                  alt="Avatar" 
                  className="w-18 h-18 rounded-full object-cover border border-white"
                  referrerPolicy="no-referrer"
                />
                {/* Live Indicator */}
                <div className="absolute bottom-0 right-0 flex flex-col items-center translate-x-1 translate-y-1">
                  <motion.div 
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-3 h-3 bg-[#22C55E] rounded-full shadow-[0_0_8px_#22C55E]" 
                  />
                  <span className="text-[7px] font-bold text-[#22C55E] leading-none mt-0.5 drop-shadow-sm">AO VIVO</span>
                </div>
              </div>
            </div>

            {/* Name and Handle */}
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <h2 className="text-xl font-medium text-[#333333]">Bia Araújo</h2>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-privacy-orange">
                  <path d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z" stroke="currentColor" strokeWidth="1.5"></path>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <p className="text-[#1E293B] text-sm">@biaaraujo_2</p>
            </div>

            {/* Bio */}
            <div className="mt-2 space-y-1">
              <p className={`text-[13px] text-black leading-relaxed ${!isBioExpanded ? 'line-clamp-2' : ''}`}>
                novinha de 18 anos, com o peitinho e a bundinha 🍑 mais deliciosa que você vai ver na vida.. Minha bucetinha é bem apertadinha e sou cheia de tesão para dar... Meu conteúdo é completo e EXPLÍCITO. Com vídeos e fotos.
              </p>
              <button 
                onClick={() => setIsBioExpanded(!isBioExpanded)}
                className="text-privacy-orange text-[13px] font-semibold hover:underline"
              >
                {isBioExpanded ? 'Ler menos' : 'Ler mais'}
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex gap-3">
              {/* Instagram */}
              <button className="w-8 h-8 bg-privacy-bg hover:bg-gray-100 rounded-full transition-colors border border-gray-100 shadow-sm flex items-center justify-center">
                <Instagram className="w-3.5 h-3.5 text-black" />
              </button>
              
              {/* X (Twitter) */}
              <button className="w-8 h-8 bg-privacy-bg hover:bg-gray-100 rounded-full transition-colors border border-gray-100 shadow-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-black">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </button>

              {/* TikTok */}
              <button className="w-8 h-8 bg-privacy-bg hover:bg-gray-100 rounded-full transition-colors border border-gray-100 shadow-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 512.098" fill="currentColor" className="w-3.5 h-3.5 text-black">
                  <path d="M321.331.011h-81.882v347.887c0 45.59-32.751 74.918-72.582 74.918-39.832 0-75.238-29.327-75.238-74.918 0-52.673 41.165-80.485 96.044-74.727v-88.153c-7.966-1.333-15.932-1.77-22.576-1.77C75.249 183.248 0 255.393 0 344.794c0 94.722 74.353 167.304 165.534 167.304 80.112 0 165.097-58.868 165.097-169.96V161.109c35.406 35.406 78.341 46.476 124.369 46.476V126.14C398.35 122.151 335.494 84.975 321.331 0v.011z"/>
                </svg>
              </button>
            </div>

            {/* Subscriptions */}
            <div className="mt-6 space-y-4">
              <h3 className="text-[16px] font-semibold text-[#000000]">Assinaturas</h3>
              
              <div className="bg-[#FFF5F1] border border-[#FFE4D9] rounded-[32px] p-4 mt-2">
                <div className="flex items-center gap-2 mb-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#FF8C66] fill-current">
                    <path d="M12 2L14.8 8.4L22 12L14.8 15.6L12 22L9.2 15.6L2 12L9.2 8.4L12 2Z" />
                  </svg>
                  <h4 className="font-bold text-[#000000] text-[16px]">Oferta de assinatura</h4>
                </div>
                
                <div className="bg-white rounded-2xl p-3 flex items-center gap-3 mb-6 shadow-sm border border-gray-50">
                  <img 
                    src="https://i.imgur.com/tA4pBmt.png" 
                    className="w-10 h-10 rounded-full object-cover" 
                    alt="Avatar"
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-[#333333] text-[13px] font-medium leading-tight">
                    Vem ver de pertinho, a melhor da Privacy
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -top-3 left-4 bg-[#E6F4EA] text-[#1E8E3E] px-3 py-0.5 rounded-full text-[10px] font-bold border border-[#C6E7D1] z-10">
                    Economize 20%
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-comprar-mensal w-full h-[47px] privacy-gradient text-[#000000] text-[16px] rounded-full flex items-center justify-center font-bold shadow-lg shadow-orange-200/50"
                  >
                    Assinar agora R$ 19,93
                  </motion.button>
                </div>
                
                <div className="text-right mt-2 pr-2">
                  <p className="text-[#666666] text-[11px]">
                    Preço original <span className="line-through">R$ 24,88</span>
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[16px] font-semibold text-[#000000]">Promoções</h3>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="space-y-3">
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-comprar-trimestral w-full h-[47px] privacy-gradient opacity-90 text-[#000000] text-[16px] rounded-full py-[12px] px-[20px] flex items-center justify-between font-medium"
                  >
                    <span>3 meses (20% off )</span>
                    <span>R$ 59,71</span>
                  </motion.button>

                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-comprar-semestral w-full h-[47px] privacy-gradient opacity-80 text-[#000000] text-[16px] rounded-full py-[12px] px-[20px] flex items-center justify-between font-medium"
                  >
                    <span>6 meses (30% off )</span>
                    <span>R$ 104,50</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 bg-white rounded-[28px] border border-gray-200 shadow-sm overflow-hidden flex">
          <button 
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-5 flex items-center justify-center gap-2 border-b-2 transition-all font-medium text-[14px] ${
              activeTab === 'posts' 
                ? 'border-privacy-orange text-privacy-orange' 
                : 'border-transparent text-[#333333]'
            }`}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={activeTab === 'posts' ? 'text-privacy-orange' : 'text-[#333333]'}>
              <rect x="9" y="7" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 19H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>204 Postagens</span>
          </button>
          <button 
            onClick={() => setActiveTab('media')}
            className={`flex-1 py-5 flex items-center justify-center gap-2 border-b-2 transition-all font-medium text-[14px] ${
              activeTab === 'media' 
                ? 'border-privacy-orange text-privacy-orange' 
                : 'border-transparent text-[#333333]'
            }`}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={activeTab === 'media' ? 'text-privacy-orange' : 'text-[#333333]'}>
              <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 5L9 10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 5L14 10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M17 5L19 10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M11 13L14 14.5L11 16V13Z" fill="currentColor"/>
            </svg>
            <span>145 Mídias</span>
          </button>
        </div>

        {/* Post Feed */}
        <div className="mt-4 space-y-4">
          {activeTab === 'posts' ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://i.imgur.com/tA4pBmt.png" 
                    alt="Avatar" 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-[#333333]">Bia Araújo</span>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-privacy-orange">
                        <path d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z" stroke="currentColor" strokeWidth="1.5"></path>
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <p className="text-[#1E293B] text-xs">@biaaraujo_2</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Post Content (Locked) */}
              <div className="aspect-square bg-black relative flex flex-col items-center justify-center text-white overflow-hidden">
                <video 
                  src="https://ycysjdheofmdwhqkibqf.supabase.co/storage/v1/object/public/img%20e%20videos/0402.mp4"
                  className="absolute inset-0 w-full h-full object-cover blur-[3px] opacity-50"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <Lock className="w-16 h-16 mb-4 text-white/80 drop-shadow-lg" />
                  <div className="flex items-center gap-4 text-sm font-medium drop-shadow-md">
                    <div className="flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4" />
                      <span>102</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Video className="w-4 h-4" />
                      <span>43</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4" />
                      <span>114.9k</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="p-4 flex items-center justify-between border-t border-gray-50">
                <div className="flex items-center gap-4">
                  <button className="p-1 text-[#666666] hover:text-privacy-orange transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-1 text-[#666666] hover:text-privacy-orange transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <button className="p-1 text-[#666666] hover:text-privacy-orange transition-colors">
                    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center font-bold text-xs">
                      $
                    </div>
                  </button>
                </div>
                <button className="p-1 text-[#666666] hover:text-privacy-orange transition-colors">
                  <Bookmark className="w-6 h-6" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex justify-between items-center py-4 px-4 border-b border-gray-50">
                {['Todos', 'Fotos', 'Vídeos', 'Pagos'].map((filter) => (
                  <button 
                    key={filter}
                    onClick={() => setActiveMediaFilter(filter)}
                    className={`px-3 sm:px-5 py-1.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-all ${
                      activeMediaFilter === filter 
                        ? 'bg-orange-100/50 text-privacy-orange' 
                        : 'text-[#333333] hover:text-gray-600'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-1 p-0.5">
                {mediaImages.map((img, i) => (
                  <div key={i} className="aspect-square bg-[#fdf8f3] relative flex items-center justify-center overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Media ${i}`} 
                      className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-15">
                      <div className="w-[140%] h-[140%] border-[25px] border-white rounded-full" />
                      <div className="absolute bottom-[20%] right-[20%] w-8 h-8 bg-white rounded-full" />
                    </div>
                    <div className="absolute inset-0 bg-black/10" />
                    <Lock className="w-5 h-5 text-white relative z-10 drop-shadow-md" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Bottom Nav (Optional but common for these clones) */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center sm:hidden">
        <button className="text-privacy-orange"><ImageIcon className="w-6 h-6" /></button>
        <button className="text-gray-400"><Video className="w-6 h-6" /></button>
        <button className="text-gray-400"><Heart className="w-6 h-6" /></button>
        <button className="text-gray-400"><Bookmark className="w-6 h-6" /></button>
      </div> */}
    </div>
  );
}
