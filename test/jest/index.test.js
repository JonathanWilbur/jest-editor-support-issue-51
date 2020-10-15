test("something", () => {
    const a = {
        test: true,
        best: undefined,
    };
    expect(a.test).toBeTruthy();
    // Uncomment this line and the extension will start working
    expect(a.best?.rest).toBeFalsy();
});