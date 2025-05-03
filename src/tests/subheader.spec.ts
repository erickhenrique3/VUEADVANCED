import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.pause();
  });

  test('SubHeader deve renderizar categorias', async ({ page }) => {
    const categorias = ['BONÉS', 'TÊNIS', 'CAMISETAS DE TIMES', 'SHORTS'];
    const itens = page.locator('nav ul li');
  
    for (let i = 0; i < categorias.length; i++) {
      await expect(itens.nth(i)).toHaveText(categorias[i]);
    }
  });
  
  

  test('Deve mudar categoria ao clicar', async ({ page }) => {
    const categorias = page.locator('nav ul li');

    await categorias.nth(1).click();
    await expect(categorias.nth(1)).toHaveClass(/active/);

    await categorias.nth(3).click();
    await expect(categorias.nth(3)).toHaveClass(/active/);
  });

  test('Renderiza cards de produtos', async ({ page }) => {
    const cards = page.locator('.cards .card'); // ajuste para o seletor real do seu componente de produto
    await expect(cards).toHaveCount(21); // 
    //  mock tem 21 produtos
  });

});
