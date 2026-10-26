import test from 'node:test'
import assert from 'node:assert/strict'
import { timeAgo, formatNumber, formatDay } from './format.js'

const now = new Date('2026-10-26T15:00:00Z').getTime()

test('timeAgo usa a unidade certa', () => {
  assert.equal(timeAgo('2026-10-26T12:00:00Z', now), 'há 3 horas')
  assert.equal(timeAgo('2026-10-24T15:00:00Z', now), 'anteontem')
  assert.equal(timeAgo('2026-10-26T14:59:50Z', now), 'agora há pouco')
})

test('formatNumber separa milhares no padrão brasileiro', () => {
  assert.equal(formatNumber(1234), '1.234')
})

test('formatDay escreve a data por extenso', () => {
  assert.equal(formatDay('2026-10-20'), '20 de outubro de 2026')
})
