// Regras do formulário de contato. Espelham as validações do backend (contact/serializers.py),
// para avisar o erro na hora em vez de esperar a resposta do servidor.

export const limits = {
  name: { min: 3 },
  subject: { min: 5, max: 300 },
  message: { min: 20, max: 5000 },
}

const NAME_PATTERN = /^[A-Za-zÀ-ÿ\s'.-]+$/
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

/** Devolve a mensagem de erro do campo, ou uma string vazia se o valor é válido. */
export function validateField(key, value) {
  const text = String(value ?? '').trim()
  switch (key) {
    case 'name':
      if (!text) return 'Digite seu nome.'
      if (text.length < limits.name.min) return `O nome precisa de pelo menos ${limits.name.min} letras.`
      if (!NAME_PATTERN.test(text)) return 'Use só letras no nome (sem números ou símbolos).'
      return ''
    case 'email':
      if (!text) return 'Digite seu e-mail.'
      if (!EMAIL_PATTERN.test(text)) return 'Digite um e-mail válido, como nome@exemplo.com.'
      return ''
    case 'subject':
      if (!text) return 'Digite o assunto.'
      if (text.length < limits.subject.min) return `O assunto precisa de pelo menos ${limits.subject.min} caracteres.`
      if (String(value).length > limits.subject.max) return `O assunto aceita até ${limits.subject.max} caracteres.`
      return ''
    case 'message':
      if (!text) return 'Escreva sua mensagem.'
      if (text.length < limits.message.min) return `A mensagem precisa de pelo menos ${limits.message.min} caracteres.`
      if (String(value).length > limits.message.max) return `A mensagem aceita até ${limits.message.max} caracteres.`
      return ''
    default:
      return ''
  }
}

/** Valida o formulário inteiro e devolve só os campos com erro. */
export function validateForm(form) {
  const errors = {}
  for (const key of ['name', 'email', 'subject', 'message']) {
    const message = validateField(key, form[key])
    if (message) errors[key] = message
  }
  return errors
}

/** Texto de apoio sob o campo, com a contagem enquanto falta ou perto do limite. */
export function fieldHint(key, value) {
  const length = String(value ?? '').trim().length
  const rule = limits[key]
  if (!rule?.min) return ''
  if (length < rule.min) return `${length} de no mínimo ${rule.min} caracteres.`
  return rule.max ? `${String(value).length} de ${rule.max} caracteres.` : ''
}
