<script setup>
import { reactive, ref } from 'vue'
import SectionShell from './SectionShell.vue'
import { profile } from '../data/portfolio'
import { fieldHint, limits, validateField, validateForm } from '../utils/contactRules'

const API = (import.meta.env.VITE_API_URL || 'https://portfolio-backend-7w30.onrender.com/api').replace(/\/$/, '')

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({})
const status = ref('idle') // idle | sending | sent | failed
const feedback = ref('')

const labels = { name: 'Nome', email: 'E-mail', subject: 'Assunto', message: 'Mensagem' }

const touched = reactive({})

/** Valida um campo ao sair dele e, depois do primeiro aviso, a cada tecla. */
function checkField(key) {
  touched[key] = true
  const message = validateField(key, form[key])
  if (message) errors[key] = message
  else delete errors[key]
}

function onInput(key) {
  if (touched[key]) checkField(key)
}

function validate() {
  Object.keys(errors).forEach((key) => delete errors[key])
  Object.assign(errors, validateForm(form))
  Object.keys(labels).forEach((key) => (touched[key] = true))
  return Object.keys(errors).length === 0
}

async function submit() {
  if (!validate()) {
    status.value = 'idle'
    feedback.value = 'Corrija os campos marcados e envie de novo.'
    return
  }
  status.value = 'sending'
  feedback.value = ''
  try {
    const response = await fetch(`${API}/contact/send/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    if (response.ok) {
      status.value = 'sent'
      feedback.value = 'Mensagem enviada. Respondo no e-mail que você informou.'
      Object.keys(form).forEach((key) => (form[key] = ''))
      Object.keys(touched).forEach((key) => delete touched[key])
      Object.keys(errors).forEach((key) => delete errors[key])
      return
    }
    status.value = 'failed'
    if (response.status === 429) {
      feedback.value = `Você já enviou várias mensagens. Tente de novo mais tarde ou escreva para ${profile.email}.`
    } else if (response.status === 400) {
      const body = await response.json().catch(() => ({}))
      for (const [key, messages] of Object.entries(body.errors ?? {})) errors[key] = [].concat(messages)[0]
      feedback.value = 'Corrija os campos marcados e envie de novo.'
    } else {
      feedback.value = `Não consegui enviar agora. Escreva direto para ${profile.email}.`
    }
  } catch {
    status.value = 'failed'
    feedback.value = `Não consegui falar com o servidor. Escreva direto para ${profile.email}.`
  }
}
</script>

<template>
  <SectionShell
    id="contato"
    title="Contato"
    intro="Escreva sobre a vaga ou o projeto. A mensagem chega no meu e-mail."
  >
    <div class="contact">
      <form class="form" novalidate @submit.prevent="submit">
        <div v-for="field in ['name', 'email', 'subject']" :key="field" class="form__field">
          <label :for="`campo-${field}`">{{ labels[field] }}</label>
          <input
            :id="`campo-${field}`"
            v-model="form[field]"
            :type="field === 'email' ? 'email' : 'text'"
            :autocomplete="field === 'name' ? 'name' : field === 'email' ? 'email' : 'off'"
            :aria-invalid="Boolean(errors[field])"
            :aria-describedby="errors[field] ? `erro-${field}` : field === 'subject' ? 'dica-subject' : undefined"
            maxlength="300"
            @blur="checkField(field)"
            @input="onInput(field)"
          />
          <p v-if="errors[field]" :id="`erro-${field}`" class="form__error">{{ errors[field] }}</p>
          <p v-else-if="field === 'subject'" id="dica-subject" class="form__hint">{{ fieldHint('subject', form.subject) }}</p>
        </div>
        <div class="form__field">
          <label for="campo-message">{{ labels.message }}</label>
          <textarea
            id="campo-message"
            v-model="form.message"
            rows="6"
            :aria-invalid="Boolean(errors.message)"
            :maxlength="limits.message.max"
            :aria-describedby="errors.message ? 'erro-message' : 'dica-message'"
            @blur="checkField('message')"
            @input="onInput('message')"
          />
          <p v-if="errors.message" id="erro-message" class="form__error">{{ errors.message }}</p>
          <p v-else id="dica-message" class="form__hint">{{ fieldHint('message', form.message) }}</p>
        </div>
        <div class="form__submit">
          <button class="button button--solid" type="submit" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Enviando…' : 'Enviar mensagem' }}
          </button>
          <p class="form__status" :class="{ 'form__status--ok': status === 'sent', 'form__status--bad': status === 'failed' || Object.keys(errors).length }" role="status">
            {{ feedback }}
          </p>
        </div>
      </form>

      <div class="direct">
        <h3 class="direct__title">Ou direto</h3>
        <ul>
          <li><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li><a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn<span class="visually-hidden"> (abre em nova aba)</span></a></li>
          <li><a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden"> (abre em nova aba)</span></a></li>
          <li><a :href="profile.instagram" target="_blank" rel="noopener noreferrer">Instagram<span class="visually-hidden"> (abre em nova aba)</span></a></li>
        </ul>
      </div>
    </div>
  </SectionShell>
</template>

<style scoped>
.contact {
  display: grid;
  gap: var(--space-4);
}

.form {
  display: grid;
  gap: var(--space-2);
  max-width: 36rem;
}

.form__field {
  display: grid;
  gap: 0.35rem;
}

.form__field label {
  font-weight: 600;
  font-size: var(--step--1);
}

.form input,
.form textarea {
  width: 100%;
  padding: 0.7rem 0.85rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
}

.form textarea {
  resize: vertical;
  min-height: 8rem;
}

.form input:hover,
.form textarea:hover {
  border-color: var(--ink-soft);
}

.form [aria-invalid='true'] {
  border-color: var(--danger);
}

.form__hint {
  min-height: 1.4em;
  color: var(--ink-soft);
  font-size: var(--step--1);
}

.form__error {
  color: var(--danger);
  font-size: var(--step--1);
}

.form__submit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
}

.form__status {
  flex: 1 1 14rem;
  font-size: var(--step--1);
}

.form__status--ok {
  color: var(--ok);
}

.form__status--bad {
  color: var(--danger);
}

.direct__title {
  margin-bottom: 0.75rem;
  font-size: var(--step-1);
  font-weight: 650;
}

.direct li + li {
  margin-top: 0.4rem;
}

.direct a {
  font-weight: 600;
  overflow-wrap: anywhere;
}

@media (min-width: 75rem) {
  .contact {
    grid-template-columns: minmax(0, 36rem) minmax(14rem, 1fr);
    gap: var(--space-5);
  }
}
</style>
