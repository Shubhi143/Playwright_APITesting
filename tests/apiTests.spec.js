import { test, expect } from '@playwright/test';

test('API GET Request', async({
    request
}) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
        // expect(response.status()).toBe(200)
    const text = await response.text()
    console.log(response.json())
})