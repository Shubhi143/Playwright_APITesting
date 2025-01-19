import { expect, test } from '@playwright/test';

test('API PUT Request', async({
    request
}) => {
    const response = await request.put("https://reqres.in/api/users/2", {
            data: {
                "name": "Raghav",
                "job": "teacher"
            }
        })
        // expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Raghav');
    console.log(await response.json());

})