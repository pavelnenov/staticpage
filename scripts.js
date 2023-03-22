function searchContent() {
    const query = this.value.toLowerCase();
    const content = document.body.textContent || document.body.innerText;
    if (content.toLowerCase().indexOf(query) !== -1) {
        // Content found, perform necessary action
        console.log("Content found");
    } else {
        // Content not found, perform necessary action
        console.log("Content not found");
    }
}
