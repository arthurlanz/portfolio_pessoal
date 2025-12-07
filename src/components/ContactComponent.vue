<template>
  <section id="contato" class="contact">
    <div class="container">
      <div class="contact-header animate-on-scroll">
        <span class="section-label">Entre em Contato</span>
        <h2 class="section-title">Vamos Conversar?</h2>
        <p class="section-description">
          Estou sempre aberto a novos projetos, colaborações e oportunidades.
          Se você tem uma ideia em mente ou apenas quer bater um papo sobre tecnologia,
          ficarei feliz em conversar!
        </p>
      </div>

      <div class="contact-content">
        <!-- Contact Info Cards -->
        <div class="contact-info">
          <div class="info-card animate-on-scroll">
            <div class="info-icon">
              <Mail :size="32" />
            </div>
            <div class="info-content">
              <h3 class="info-title">Email</h3>
              <a :href="`mailto:${personalInfo.email}`" class="info-link">
                {{ personalInfo.email }}
              </a>
              <p class="info-description">
                Respondo em até 24 horas
              </p>
            </div>
          </div>

          <div class="info-card animate-on-scroll">
            <div class="info-icon">
              <MapPin :size="32" />
            </div>
            <div class="info-content">
              <h3 class="info-title">Localização</h3>
              <p class="info-link">
                {{ personalInfo.location }}
              </p>
              <p class="info-description">
                Disponível para projetos remotos
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form & Social -->
        <div class="contact-main">
          <!-- Form -->
          <div class="contact-form animate-on-scroll">
            <div class="form-header">
              <Send :size="24" />
              <h3 class="form-title">Envie uma Mensagem</h3>
            </div>

            <form @submit.prevent="handleSubmit" class="form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name" class="form-label">
                    <User :size="18" />
                    <span>Nome Completo</span>
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    class="form-input"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">
                    <Mail :size="18" />
                    <span>Email</span>
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="form-input"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">
                  <FileText :size="18" />
                  <span>Assunto</span>
                </label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  class="form-input"
                  placeholder="Sobre o que deseja falar?"
                  required
                />
              </div>

              <div class="form-group">
                <label for="message" class="form-label">
                  <MessageSquare :size="18" />
                  <span>Mensagem</span>
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="form-textarea"
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" class="form-submit" :disabled="isSubmitting">
                <Send :size="20" />
                <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}</span>
                <ArrowRight :size="20" />
              </button>

              <p v-if="submitMessage" class="submit-message" :class="submitStatus">
                {{ submitMessage }}
              </p>
            </form>
          </div>

          <!-- Social Links -->
          <div class="social-section animate-on-scroll">
            <div class="social-header">
              <Share2 :size="24" />
              <h3 class="social-title">Conecte-se Comigo</h3>
            </div>

            <p class="social-description">
              Prefere me encontrar nas redes sociais? Estou ativo nessas plataformas e
              sempre compartilhando conteúdo sobre desenvolvimento web e tecnologia.
            </p>

            <div class="social-links">
              <a
                :href="personalInfo.social.github"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link github"
              >
                <div class="social-icon">
                  <Github :size="24" />
                </div>
                <div class="social-content">
                  <h4 class="social-name">GitHub</h4>
                  <p class="social-handle">@arthurlanz</p>
                  <p class="social-info">{{ githubStats.totalStats.allCommits }} commits • {{ githubStats.totalStats.allRepositories }} repos</p>
                </div>
                <ExternalLink :size="20" class="social-arrow" />
              </a>

              <a
                :href="personalInfo.social.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link linkedin"
              >
                <div class="social-icon">
                  <Linkedin :size="24" />
                </div>
                <div class="social-content">
                  <h4 class="social-name">LinkedIn</h4>
                  <p class="social-handle">Arthur Lanznaster</p>
                  <p class="social-info">Desenvolvedor Frontend • IFC Araquari</p>
                </div>
                <ExternalLink :size="20" class="social-arrow" />
              </a>

              <a
                :href="personalInfo.social.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link instagram"
              >
                <div class="social-icon">
                  <Instagram :size="24" />
                </div>
                <div class="social-content">
                  <h4 class="social-name">Instagram</h4>
                  <p class="social-handle">@arthurlanz_</p>
                  <p class="social-info">Bastidores do desenvolvimento</p>
                </div>
                <ExternalLink :size="20" class="social-arrow" />
              </a>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="quick-actions animate-on-scroll">
            <h3 class="actions-title">
              <Zap :size="20" />
              Ações Rápidas
            </h3>
            <div class="actions-grid">
              <a :href="`mailto:${personalInfo.email}`" class="action-button">
                <Mail :size="20" />
                <span>Enviar Email</span>
              </a>
              <a :href="personalInfo.social.linkedin" target="_blank" class="action-button">
                <Linkedin :size="20" />
                <span>Conectar no LinkedIn</span>
              </a>
              <a href="#projetos" class="action-button">
                <Briefcase :size="20" />
                <span>Ver Projetos</span>
              </a>
              <button @click="copyEmail" class="action-button">
                <Copy :size="20" />
                <span>{{ copied ? 'Email Copiado!' : 'Copiar Email' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="faq-section animate-on-scroll">
        <h3 class="faq-title">
          <HelpCircle :size="24" />
          Perguntas Frequentes
        </h3>
        <div class="faq-grid">
          <div class="faq-item">
            <h4 class="faq-question">Quanto tempo leva para responder?</h4>
            <p class="faq-answer">
              Geralmente respondo em até 24 horas durante dias úteis.
              Para projetos urgentes, indique no assunto do email.
            </p>
          </div>
          <div class="faq-item">
            <h4 class="faq-question">Você aceita projetos freelance?</h4>
            <p class="faq-answer">
              Sim! Estou aberto a projetos freelance, especialmente aqueles que
              envolvem Vue.js, Node.js ou desenvolvimento fullstack.
            </p>
          </div>
          <div class="faq-item">
            <h4 class="faq-question">Trabalha remotamente?</h4>
            <p class="faq-answer">
              Sim, tenho experiência com trabalho remoto e todas as ferramentas
              necessárias para colaboração online.
            </p>
          </div>
          <div class="faq-item">
            <h4 class="faq-question">Disponível para estágio?</h4>
            <p class="faq-answer">
              Sim! Estou buscando oportunidades de estágio para crescer como desenvolvedor
              e contribuir com projetos reais.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  Mail, MapPin, Send, User, FileText, MessageSquare,
  ArrowRight, Share2, Github, Linkedin, Instagram,
  ExternalLink, Zap, Briefcase, Copy, HelpCircle
} from 'lucide-vue-next'
import { personalInfo, githubStats } from '../data/portfolio'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')
const copied = ref(false)

const API_URL = 'https://portfolio-backend-7w30.onrender.com/api/contact'

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  submitStatus.value = ''

  console.log('📤 Enviando dados:', formData.value)

  try {
    const response = await fetch(`${API_URL}/send/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    })

    console.log('📥 Status:', response.status)

    const data = await response.json()
    console.log('📥 Resposta:', data)

    if (response.ok) {
      submitMessage.value = data.message || 'Mensagem enviada com sucesso!'
      submitStatus.value = 'success'

      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    } else {
      const errorMessages = []
      if (data.errors) {
        Object.keys(data.errors).forEach(field => {
          errorMessages.push(`${field}: ${data.errors[field].join(', ')}`)
        })
        throw new Error(errorMessages.join(' | '))
      }
      throw new Error(data.error || data.message || 'Erro ao enviar mensagem')
    }
  } catch (error) {
    console.error('❌  Erro:', error)
    submitMessage.value = error.message || 'Erro ao enviar. Tente novamente.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false

    setTimeout(() => {
      submitMessage.value = ''
      submitStatus.value = ''
    }, 5000)
  }
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(personalInfo.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Erro ao copiar:', err)
  }
}
</script>

<style scoped>
.contact {
  padding: 8rem 0;
}

/* Header */
.contact-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

/* Contact Content */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateX(8px);
}

.info-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-primary);
}

.info-content {
  flex: 1;
}

.info-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.info-link {
  display: block;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-link:hover {
  color: var(--text-primary);
}

.info-description {
  font-size: 0.875rem;
  color: var(--text-tertiary);
}

/* Main Content */
.contact-main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Form */
.contact-form {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2.5rem;
}

.form-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  color: var(--bg-primary);
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

/* Social Section */
.social-section {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2.5rem;
}

.social-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.social-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.social-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.social-link:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateX(8px);
}

.social-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
}

.social-link.github:hover .social-icon {
  background: #181717;
  border-color: #181717;
}

.social-link.linkedin:hover .social-icon {
  background: #0077B5;
  border-color: #0077B5;
}

.social-link.instagram:hover .social-icon {
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  border-color: transparent;
}

.social-content {
  flex: 1;
}

.social-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.social-handle {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.social-info {
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

.social-arrow {
  color: var(--text-secondary);
  opacity: 0;
  transition: all 0.3s ease;
}

.social-link:hover .social-arrow {
  opacity: 1;
  transform: translateX(4px);
}

/* Quick Actions */
.quick-actions {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
}

.actions-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--text-primary);
  color: var(--text-primary);
  transform: translateY(-2px);
}

/* FAQ Section */
.faq-section {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 3rem;
}

.faq-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
  justify-content: center;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.faq-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.faq-answer {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form,
  .social-section,
  .quick-actions,
  .faq-section {
    padding: 1.5rem;
  }

  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
