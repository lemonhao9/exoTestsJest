import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    const message = page.locator('#message');
    await expect(message).toHaveText('User logged in successfully');
});