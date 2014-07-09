define(["src-models/my-js-source"], function(mySource) {
	return describe("tests for my-js-source", function() {
		it("should check a dummy boolean", function() {
			return expect(true).toBe(true);
		});
		it("should not prefetch", function() {
            return expect(mySource.preFetch()).toBe(false);
        });
	});
});
