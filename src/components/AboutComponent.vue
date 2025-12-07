<template>
  <section id="sobre" class="about">
    <div class="container">
      <div class="about-header animate-on-scroll">
        <span class="section-label">Conheça Mais</span>
        <h2 class="section-title">Sobre Mim</h2>
      </div>

      <div class="about-content">
        <!-- Profile Card -->
        <div class="profile-card animate-on-scroll">
          <div class="profile-image-wrapper">
            <div class="profile-image">
              <img src="/public/images/IMG_6846.jpg" :size="120" />
            </div>
            <div class="profile-badge">
              <Sparkles :size="20" />
              <span>Desenvolvedor</span>
            </div>
          </div>

          <div class="profile-info">
            <h3 class="profile-name">{{ personalInfo.name }}</h3>
            <p class="profile-role">{{ personalInfo.role }}</p>
            <div class="profile-location">
              <MapPin :size="16" />
              <span>{{ personalInfo.location }}</span>
            </div>
          </div>

          <div class="profile-stats">
            <div class="stat-item">
              <div class="stat-value">{{ githubStats.totalStats.allCommits }}</div>
              <div class="stat-label">Commits</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">{{ githubStats.totalStats.totalProjects }}</div>
              <div class="stat-label">Projetos</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">{{ githubStats.totalStats.yearsActive }}</div>
              <div class="stat-label">Ano</div>
            </div>
          </div>

          <div class="profile-social">
            <a :href="personalInfo.social.github" target="_blank" class="social-link">
              <Github :size="20" />
            </a>
            <a :href="personalInfo.social.linkedin" target="_blank" class="social-link">
              <Linkedin :size="20" />
            </a>
            <a :href="personalInfo.social.instagram" target="_blank" class="social-link">
              <Instagram :size="20" />
            </a>
            <a :href="`mailto:${personalInfo.email}`" class="social-link">
              <Mail :size="20" />
            </a>
          </div>
        </div>

        <!-- Main Content -->
        <div class="about-main">
          <!-- Bio Section -->
          <div class="content-section animate-on-scroll">
            <div class="section-icon">
              <BookOpen :size="24" />
            </div>
            <div class="section-body">
              <h3 class="section-heading">Quem Sou Eu</h3>
              <div class="bio-content">
                <p class="bio-text">
                  Olá! Sou <strong>{{ personalInfo.name }}</strong>, um jovem desenvolvedor de
                  {{ personalInfo.location.split(',')[0] }}.
                  Minha jornada no mundo do desenvolvimento começou em fevereiro de 2024, ao entrar no IFC Araquari.
                </p>
                <p class="bio-text">
                  O que mais me motiva é transformar ideias em realidade através do código. Cada projeto é uma
                  oportunidade de aprender algo novo e superar desafios. Desde a criação da minha primeira página
                  HTML até desenvolver aplicações fullstack completas, venho evoluindo constantemente e buscando
                  sempre entregar soluções que façam diferença.
                </p>
                <p class="bio-text">
                  Atualmente estou <strong>{{ education.status }}</strong> no IFC Araquari, onde equilibro
                  estudos acadêmicos com projetos práticos e freelances. Acredito que a melhor forma de aprender
                  é fazendo, e é por isso que já acumulei mais de
                  <strong>{{ githubStats.codeMetrics.totalLinesWritten.toLocaleString('pt-BR') }} linhas de código</strong>
                  em projetos reais que impactam usuários de verdade.
                </p>
              </div>
            </div>
          </div>

          <!-- Journey -->
          <div class="content-section animate-on-scroll">
            <div class="section-icon">
              <Rocket :size="24" />
            </div>
            <div class="section-body">
              <h3 class="section-heading">Minha Jornada</h3>
              <div class="journey-content">
                <p class="bio-text">
                  Minha trajetória como desenvolvedor começou com curiosidade e se transformou em objetivo.
                  O primeiro marco foi o projeto <strong>Nutriverso</strong>, onde trabalhei em equipe pela
                  primeira vez e descobri o poder da colaboração no desenvolvimento de software.
                </p>
                <p class="bio-text">
                  A virada de chave aconteceu quando participei do <strong>Hackathon IFC 2025</strong>, foi uma experiência transformadora. Desenvolver a plataforma <strong>Join-Ville</strong> sob pressão de tempo, trabalhando com Django e Vue.js simultaneamente, me preparou para os desafios do mundo real. Foi intenso, estressante, mas incrivelmente gratificante.
                </p>
                <p class="bio-text">
                  Desde então comecei a trabalhar em <strong>projetos comerciais</strong>.
                  Desenvolver a plataforma <strong>MetFlix</strong> do zero, incluindo autenticação, banco de
                  dados e interface completa, me mostrou que eu era capaz de criar sistemas complexos e funcionais.
                  Refatorar o frontend do <strong>Artelie</strong> me ensinou sobre código legado e boas práticas.
                </p>
              </div>
            </div>
          </div>

                  <div class="content-section animate-on-scroll">
            <div class="section-icon">
              <Coffee :size="24" />
            </div>
            <div class="section-body">
              <h3 class="section-heading">Além do Código</h3>
              <div class="interests-content">
                <p class="bio-text">
                  Quando não estou programando, gosto de explorar outras paixões que me ajudam a manter a mente fresca e criativa.
                  Sou um entusiasta de <strong>games</strong>, especialmente títulos que desafiam o pensamento estratégico e a resolução de problemas.
                  Também sou um apaixonado por <strong>música</strong>, seja ouvindo minhas playlists favoritas ou explorando novos artistas e gêneros.
                </p>
                <p class="bio-text">
                  Também valorizo o equilíbrio. Dedico tempo para estar com amigos, praticar atividades físicas
                  e descansar a mente. Um desenvolvedor produtivo é também um desenvolvedor descansado e feliz.
                </p>

                <div class="interests-tags">
                  <div class="interest-tag">
                    <Gamepad2 :size="16" />
                    <span>Gaming</span>
                  </div>
                  <div class="interest-tag">
                    <Music :size="16" />
                    <span>Música</span>
                  </div>
                  <div class="interest-tag">
                    <Book :size="16" />
                    <span>Aprendizado</span>
                  </div>
                  <div class="interest-tag">
                    <Coffee :size="16" />
                    <span>Café</span>
                  </div>
                  <div class="interest-tag">
                    <Youtube :size="16" />
                    <span>Tech Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Goals -->
          <div class="content-section animate-on-scroll">
            <div class="section-icon">
              <Compass :size="24" />
            </div>
            <div class="section-body">
              <h3 class="section-heading">Próximos Passos</h3>
              <div class="goals-content">
                <p class="bio-text">
                  Meu objetivo é me tornar um <strong>desenvolvedor fullstack completo</strong>, mas o meu maior foco é em <strong>desenvolvimentos frontend</strong>, sendo capaz de
                  construir aplicações do zero até o deploy. Quero dominar TypeScript, aprender React para
                  expandir meu conhecimento além do Vue.js, e explorar o mundo de DevOps com Docker e CI/CD.
                </p>
                <p class="bio-text">
                  A curto prazo, busco uma <strong>oportunidade de estágio</strong> onde possa aplicar meus
                  conhecimentos em um ambiente profissional, aprender com desenvolvedores experientes e
                  contribuir com projetos de impacto real.
                </p>
                <p class="bio-text">
                  A longo prazo, sonho em trabalhar em empresas que valorizam inovação e qualidade, contribuir
                  para projetos open source significativos, e quem sabe, criar minhas próprias soluções que
                  ajudem pessoas ao redor do mundo. Ou até tem minha própria empresa de tecnologia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Sparkles,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Mail,
  BookOpen,
  Rocket,
  Coffee,
  Compass,
  Gamepad2,
  Music,
  Book,
  Youtube
} from 'lucide-vue-next'
import { personalInfo, education, githubStats } from '../data/portfolio'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()
</script>

<style scoped>
.about {
  padding: 8rem 0;
}

/* Header */
.about-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 20px;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Content Layout */
.about-content {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 3rem;
  align-items: start;
}

/* Profile Card */
.profile-card {
  position: sticky;
  top: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  z-index: 999;
}

.profile-image-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.profile-image {
  width: 160px;
  height: 160px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-primary);
  border: 4px solid var(--bg-secondary);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.profile-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.profile-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.profile-role {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.profile-location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  padding: 1.5rem 0;
  margin-bottom: 2rem;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-divider {
  width: 1px;
  background: var(--border-color);
}

.profile-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--text-primary);
  color: var(--text-primary);
  transform: translateY(-2px);
}

/* Main Content */
.about-main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  display: flex;
  gap: 1.5rem;
}

.section-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-primary);
}

.section-body {
  flex: 1;
}

.section-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.bio-text {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: justify;
}

.bio-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* Values Grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.value-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.value-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
}

.value-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.value-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Interests */
.interests-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.interest-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.interest-tag:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
  transform: translateY(-2px);
}

/* CTA Box */
.cta-box {
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid var(--border-color);
  border-radius: 16px;
  text-align: center;
}

.cta-text {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.cta-text strong {
  color: var(--text-primary);
  font-size: 1.125rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  color: var(--bg-primary);
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}

/* Responsive */
@media (max-width: 1200px) {
  .about-content {
    grid-template-columns: 300px 1fr;
  }
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .profile-card {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .profile-image {
    width: 120px;
    height: 120px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .content-section {
    flex-direction: column;
  }

  .section-icon {
    width: 56px;
    height: 56px;
  }
}
</style>
