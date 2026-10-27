import test from 'node:test'
import assert from 'node:assert/strict'
import { validateField, validateForm, fieldHint } from './contactRules.js'

test('aceita um formulário válido', () => {
  const form = { name: 'Maria D\'Ávila', email: 'maria@exemplo.com', subject: 'Vaga de estágio', message: 'Olá! Gostei do seu portfólio e queria conversar.' }
  assert.deepEqual(validateForm(form), {})
})

test('recusa o que o backend recusa', () => {
  assert.match(validateField('name', 'Jo'), /pelo menos 3/)
  assert.match(validateField('name', 'Arthur 2'), /só letras/)
  assert.match(validateField('email', 'sem-arroba'), /válido/)
  assert.match(validateField('subject', 'oi'), /pelo menos 5/)
  assert.match(validateField('message', 'curta demais'), /pelo menos 20/)
  assert.match(validateField('message', 'a'.repeat(5001)), /até 5000/)
})

test('campo vazio pede o preenchimento', () => {
  assert.equal(Object.keys(validateForm({ name: '', email: '', subject: '', message: '' })).length, 4)
})

test('mostra a contagem de caracteres que falta', () => {
  assert.equal(fieldHint('message', 'oi'), '2 de no mínimo 20 caracteres.')
  assert.equal(fieldHint('message', 'a'.repeat(30)), '30 de 5000 caracteres.')
})
