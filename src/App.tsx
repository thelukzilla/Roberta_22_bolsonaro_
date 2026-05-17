/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Bell,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  MessageSquare,
  Search,
  ThumbsUp,
  Users,
} from 'lucide-react';
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f2ef] text-[#000000e6] font-sans pb-16 flex flex-col">
      {/* Navbar */}
      <header className="bg-white h-12 border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl w-full mx-auto px-4 h-full flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0a66c2] text-white rounded flex items-center justify-center font-bold text-lg leading-none p-1">
              in
            </div>
            <div className="hidden lg:flex items-center bg-[#eee] h-8 px-3 rounded-md">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Pesquisar pretendentes..."
                className="bg-transparent border-none outline-none text-sm ml-2 w-52 placeholder-gray-500 text-gray-700"
                readOnly
              />
            </div>
          </div>

          <nav className="flex items-center gap-6 text-xs font-medium text-gray-500 h-full">
            <div className="flex flex-col items-center cursor-pointer text-black border-b-2 border-black h-12 justify-center">
              <Home className="w-5 h-5" />
              <span className="hidden md:block mt-1">Início</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-black justify-center h-12 transition-colors">
              <Users className="w-5 h-5" />
              <span className="hidden md:block mt-1">Sua Rede</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-black justify-center h-12 transition-colors relative">
              <Briefcase className="w-5 h-5" />
              <span className="hidden md:block mt-1">Vagas</span>
              <span className="absolute top-1 -right-1 bg-red-600 w-3.5 h-3.5 rounded-full text-white text-[9px] flex items-center justify-center">
                1
              </span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-black justify-center h-12 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span className="hidden md:block mt-1">Mensagens</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-black justify-center h-12 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="hidden md:block mt-1">Notificações</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column (Main Profile Info) */}
        <div className="md:col-span-2 space-y-4">
          
          {/* Profile Header Card */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Banner */}
            <div className="h-32 md:h-48 bg-gray-300 relative">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" 
                alt="Montanhas" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="px-6 pb-6">
              {/* Profile Avatar */}
              <div className="-mt-12 md:-mt-16 mb-4 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm flex items-center justify-center relative">
                <img 
                  src="https://api.dicebear.com/7.x/micah/svg?seed=Willian&backgroundColor=b6e3f4" 
                  alt="Willian"
                  className="w-full h-full object-cover" 
                />
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-semibold">Willian <span className="text-gray-400 font-normal text-sm ml-2">(Ele/Dele)</span></h1>
                    <p className="text-sm mt-1 leading-tight text-[#000000e6]">
                      Estudante de SI | Empreendedor de ideias da madrugada | Lutador | Aspirante a pé-de-valsa no forró
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Em busca de propósitos... e possivelmente café</span>
                      <span className="mx-1">•</span>
                      <a href="#" className="font-semibold text-blue-600 hover:underline">Informações de contato</a>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                      alt="Company Logo Placeholder" 
                      className="w-10 opacity-0" // Just spacing placeholder matching linkedin layout
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-4 text-sm font-medium">
                  <button className="bg-[#0a66c2] text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-[#004182] transition-colors cursor-pointer border border-transparent">
                    Conectar (Dar Match)
                  </button>
                  <button className="border border-[#0a66c2] text-[#0a66c2] px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors cursor-pointer">
                    Agendar Café
                  </button>
                  <button className="border border-gray-500 text-gray-500 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer">
                    Mais
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-2">
            <h2 className="font-semibold text-lg">Sobre</h2>
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                Venho por meio desta me recomendar como um <span className="font-semibold">pretendente em potencial</span>, ainda em fase de análise, mas com bons indícios de ser uma experiência interessante, levemente intensa e possivelmente cheia de boas histórias.
              </p>
              <p>
                Sou estudante de Sistemas de Informação, apaixonado por tecnologia, empreendedorismo e por transformar ideias em projetos reais. Sou o tipo de pessoa que dificilmente fica parada: quando não estou estudando programação, pensando em aplicativos ou criando soluções digitais, provavelmente estou tentando organizar alguma ideia nova que apareceu do nada na cabeça às duas da manhã.
              </p>
              <p>
                No convívio, busco evoluir constantemente. Valorizo conversas profundas, mas também gosto de humor, leveza e momentos simples. Tenho um perfil que mistura disciplina com caos criativo: treino, estudo, crio projetos, tento organizar a própria rotina e, no meio disso tudo, ainda arrumo tempo para pensar em como ser uma pessoa melhor.
              </p>
              <p>
                Não aceito viver no automático. Gosto de aprender, melhorar, testar caminhos, construir coisas e buscar uma vida com mais propósito. A intensidade é direcionada: quero crescer, criar, me desenvolver e viver experiências que realmente façam sentido.
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-md border-l-4 border-[#0a66c2] text-sm text-[#000000e6]">
                <strong>Resumo da Vaga:</strong> Estudante de Sistemas de Informação, atleta nas horas vagas, leitor em construção, dançarino iniciante, empreendedor de ideias, fã de natureza e alguém tentando equilibrar ambição, leveza e propósito.
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Experiências (Candidato)</h2>
            <div className="space-y-6">
              
              {/* Exp 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded">
                  <Briefcase className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Empreendedor de Ideias Malucas</h3>
                  <p className="text-sm text-gray-900">Autônomo</p>
                  <p className="text-sm text-gray-500">Jan 2020 - O momento atual • Tempo Incontável</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Envolvimento direto em projetos ambiciosos:
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Desenvolvimento de um aplicativo voltado para organização, gestão de tempo e melhoria de rotina.</li>
                      <li>Criação de uma ONG/projeto social conectando jovens iniciantes em programação com empreendedores locais. (Eu gosto de crescer, mas prefiro levar os outros junto).</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Exp 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded">
                  <Heart className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Atleta Amador (Múltiplas Modalidades)</h3>
                  <p className="text-sm text-gray-900">Vida Pessoal, SA.</p>
                  <p className="text-sm text-gray-500">Rotina Ativa • Sempre cansado, mas sempre lá</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Praticante de Muay thai, Jiu-jítsu, Corrida e Calistenia. Provavelmente vou dizer que estou cansado, mas ainda assim vou inventar algum treino. Também adepto das trilhas e acampar no mato (sofrer um pouco longe da cidade virou uma forma aceitável de paz interior).
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Exp 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Aspirante a Dançarino de Forró</h3>
                  <p className="text-sm text-gray-900">Pista de Dança</p>
                  <p className="text-sm text-gray-500">Fase Inicial • Alto risco de pisões</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Tentando descobrir se tenho ritmo ou apenas coragem. Compensando a falta de técnica com muito esforço e vontade de aprender.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Formação Acadêmica e Intelectual</h2>
            <div className="space-y-6">
              
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded">
                  <GraduationCap className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Sistemas de Informação</h3>
                  <p className="text-sm text-gray-900">Educação Formal</p>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded">
                  <Search className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Clube do Livro (Filosofia e Literatura)</h3>
                  <p className="text-sm text-gray-900">Busca pelo sentido da vida</p>
                  <p className="text-sm text-gray-500">Mês 2 • Excesso de Otimismo</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Gosto de conversar sobre ideias, comportamento humano e, ocasionalmente, o colapso silencioso da existência moderna. Detalhe: mal dou conta de um livro e já entrei em outro clube. Pode ser ambição cultural ou falta de noção de tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Column (Sidebar) */}
        <div className="hidden md:block col-span-1 space-y-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="font-semibold text-sm mb-3">Recomendações da Vaga</h2>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Recomenda-se o Willian para conversas interessantes, rolês envolvendo café, trilhas, dança, livros, ideias malucas de negócios, reflexões existenciais e possíveis planos de vida que começam simples e terminam virando um projeto com nome, logo e planilha.
            </p>
            <button className="w-full text-[#0a66c2] border border-[#0a66c2] rounded-full py-1.5 text-sm font-semibold hover:bg-blue-50 transition-colors">
              Agendar Entrevista
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-20">
            <h2 className="font-semibold text-sm mb-3">Habilidades e Competências</h2>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-sm font-semibold">Organização do Caos</span>
                <span className="text-xs text-gray-500 border-b border-gray-100 pb-2 flex items-center gap-1"><ThumbsUp className="w-3 h-3"/> 99+ aprovações (vozes da cabeça)</span>
              </li>
              <li className="flex flex-col">
                <span className="text-sm font-semibold">Coragem no Forró</span>
                <span className="text-xs text-gray-500 border-b border-gray-100 pb-2 flex items-center gap-1"><ThumbsUp className="w-3 h-3"/> Requer cuidado com pisões</span>
              </li>
              <li className="flex flex-col">
                <span className="text-sm font-semibold">Programação às 2h da Manhã</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><ThumbsUp className="w-3 h-3"/> Alto nível de cafeína</span>
              </li>
            </ul>
          </div>
        </div>

      </main>

      {/* Footer / Punchline Overlay */}
      <div className="w-full mt-auto mt-8 flex flex-col items-center justify-center text-center text-gray-400 text-[10px] leading-normal pb-8">
        <p className="italic font-medium text-gray-500">
          (sim, eu fiz esse site só pela piada)
        </p>
        <p className="mt-2">© 2026 Willian Corporation - Todos os direitos reservados</p>
      </div>

    </div>
  );
}
