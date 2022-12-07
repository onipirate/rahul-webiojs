describe("eCommerce Application", async ()=> {

    it("Login the Page", async ()=> {
        await browser.url("https://trade.shipservlabs.com")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Log in")
        await $("#mui-1").setValue("tn71813@sharklasers.com")
        await $("#mui-2").setValue("Qwer123sa")
        const submit=$("button[type='submit']")
        await submit.click()
        //await browser.pause("2000")      
        console.log('LOG==>' + await $(".MuiAlert-message").getText())
        browser.waitUntil(async ()=> await submit.getText() === 'Sign in',
        {
            timeout: 15000,
            timeoutMsg: 'expected text to be different after 15s'
        }
        )
        console.log('LOG==>' + await $(".MuiAlert-message").getText())
    })

})