AFRAME.registerComponent("key", {
        schema: {
                keyFound: { type: "string" }
        },

        init: function () {
                const el = this.el;
                el.setAttribute("class", "interactable");
                this.el.setAttribute("key", "keyFound: false");
                el.setAttribute("id", "key");
                el.setAttribute("sound", "src: #keySound");

        },

        //when clicked -> keyFound == true
        //if keyFound == true -> key disappears

        update: function (oldData) {
                this.el.addEventListener("click", () => { this.el.setAttribute("key", "keyFound: true"
                ) })
        }
})