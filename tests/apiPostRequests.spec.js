import { test, expect } from '@playwright/test';

test('API Post Request', async({
    request
}) => {
    const response = await request.post("https://reqres.in/api/users", {
            data: {
                "name": "Raghav",
                "job": "teacher"
            }
        })
        // expect(response.status()).toBe(201);
    const text = await response.text();
    // expect(text).toContain(Raghav);
    console.log(await response.json());
});