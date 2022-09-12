/// <reference types="cypress" />
describe('cypress-allure-plugin marks a failed test as Skipped', () => {
  let counter = 0

  beforeEach(() => {
    counter++
    if (counter === 2 || counter >= 5) throw new Error('Fail test B once and test D always')
  })

  it('A', () => {})
  it('B', () => {})
  it('C', () => {})
  it('D', () => {})
  it('E', () => {})
})
