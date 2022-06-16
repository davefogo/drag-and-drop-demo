describe("Drag and drop demo", () => {
  it("drag and drop image", async () => {
    await browser.url(
      `file:///Users/dforero/Workspace/training/selenium/drag-drop-demo/index.html`
    );
    await browser.pause(2000);
    let drop = await $("#droppable");
    await $("#drag1").dragAndDrop(drop);
  });
});