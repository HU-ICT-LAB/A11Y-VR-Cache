AFRAME.registerComponent("key", {
        schema: {
                keyFound: { type: "string" }
        },

        init: function () {
                const el = this.el;
                el.setAttribute("class", "interactable");
                el.setAttribute("id", "key");
                el.setAttribute("sound", "src: #keySound");

                this.el.addEventListener("click", () => { 
                        // document.getElementById("closet").setAttribute("own-closet", "open: false; sleutel: true")
                        sessionStorage.setItem("keyFound", "true")
                        this.el.setAttribute("key", "keyFound: true")
        })
        

        },

        //when clicked -> keyFound == true
        //if keyFound == true -> key disappears

        update: function (oldData) {
                if (this.data.keyFound === "true") {
                        console.log("sleutel gevonden")
                        //key disappears
                }
        }
})