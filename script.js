document.addEventListener("DOMContentLoaded", function () {

    let users = [
        {
            profilepic: "https://www.famousbirthdays.com/headshots/sofi-manassyan-6.jpg",
            displaypic: "https://instagram.fixc4-1.fna.fbcdn.net/v/t39.30808-6/447496162_18447544351045553_25829807084854363_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2xlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fixc4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=j88QoVrQikcQ7kNvgFOCCOu&_nc_gid=e616372c970a4b97a56311a7964bde05&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM4MDk3MTA2NTg0NjQ5NjM0MQ%3D%3D.3-ccb7-5&oh=00_AYBIrDSUqNZaTvYv6NwdwhL8JViInxAomb__E1Z53AzBoA&oe=673572EE&_nc_sid=10d13b",
            pendingtextno: "7",
            location: "USA, California",
            name: "Sofiaa M.",
            age: 21,
            bio: "Actor | dancer | content creator. Passionate about arts, languages, and connecting with diverse cultures. KZ ✈️ LA | Founder of @sofimanassyan_like.",
            isFrind: null,
            match: "50%"

        },

        {
            profilepic: "./img/img3.jpg",
            displaypic: "./img/img2.jpg",
            pendingtextno: "5",
            location: "Japan, Tokyo",
            name: "Shi Qiwiie",
            age: 32,
            bio: "Content creator dedicated to kids' entertainment. Let's spread some joy and creativity! 🌻🎥.",
            isFrind: null,
            match: "83%"
        },

        {
            profilepic: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            pendingtextno: "4",
            displaypic: "https://images.unsplash.com/photo-1614177919002-8b868f0ac5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: "Canada, Ontario",
            name: "A Sizuiiie",
            age: 19,
            bio: "Aspiring actor and dancer with a passion for storytelling through movement and performance. Always on the lookout for new creative challenges.",
            isFrind: null,
            match: "90%"
        },

        {
            profilepic: "https://images.unsplash.com/photo-1719120894549-509eb0d3b902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdGlmdWwlMjBsYWR5fGVufDB8fDB8fHww",
            displaypic: "https://plus.unsplash.com/premium_photo-1676158157137-c3f5ce8fe6a1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            pendingtextno: "12",
            location: "France, Paris",
            name: "Chloé M.",
            age: 26,
            bio: "Fashion designer and travel enthusiast. Living life with a blend of elegance and adventure. 🇫🇷✈️",
            isFrind: null,
            match: "34%"
        },

        {
            profilepic: "https://images.unsplash.com/photo-1601717355137-4d1c9762cd3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            displaypic: "https://images.unsplash.com/photo-1698510561503-a8252790f5d6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            pendingtextno: "3",
            location: "Italy, Milan",
            name: "Marco L.",
            age: 29,
            bio: "Chef with a love for fusion cuisine. From the heart of Italy, bringing flavors to life with every dish. 🍝🍷",
            isFrind: null,
            match: "55%"
        },

        {
            profilepic: "https://images.unsplash.com/photo-1716376437337-514a324c2cc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            displaypic: "https://images.unsplash.com/photo-1716376437419-dc490c96e636?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlYXRpZnVsJTIwbGFkeXxlbnwwfHwwfHx8MA%3D%3D",
            pendingtextno: "15",
            location: "Brazil, Rio Janeiro",
            name: "Isabella R.",
            age: 22,
            bio: "Yoga instructor and nature lover. Seeking calm, peace, and a partner to explore the outdoors with. 🧘🌿",
            isFrind: null,
            match: "77%"
        },

        {
            profilepic: "https://plus.unsplash.com/premium_photo-1726873351723-cb980a1d6dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            pendingtextno: "99",
            displaypic: "https://plus.unsplash.com/premium_photo-1726863048610-96c26651ef1c?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: "India, Punjab",
            name: "Bilma Devi.",
            age: 62,
            bio: "Veteran actress, dancer, and educator. Sharing my life journey and creative passion through the art of storytelling and performance.",
            isFrind: null,
            match: "70%"
        },

        {
            profilepic: "https://images.unsplash.com/photo-1719120993960-c77a0fb13344?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            pendingtextno: "1",
            displaypic: "./img/img1.jpg",
            location: "UK, London",
            name: "Bruno SAM",
            age: 25,
            bio: "Creator, passionate about using performance art to engage with global communities. Always learning and growing as an artist.",
            isFrind: null,
            match: "10%"
        },

        {
            profilepic: "https://images.unsplash.com/photo-1616065297965-6b2a76de6807?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            displaypic: "https://images.unsplash.com/photo-1701923180384-7b7761beaa5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJlYXRpZnVsJTIwbGFkeXxlbnwwfHwwfHx8MA%3D%3D",
            pendingtextno: "8",
            location: "Germany, Berlin",
            name: "Felix S.",
            age: 34,
            bio: "Tech geek and avid gamer. Love diving into new challenges and connecting with like-minded people. 🎮💻",
            isFrind: null,
            match: "90%"
        },

        {
            profilepic: "https://images.unsplash.com/photo-1609152320224-2ae62df7779b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdGlmdWwlMjBsYWR5fGVufDB8fDB8fHww",
            displaypic: "https://images.unsplash.com/photo-1622879789083-66fdd280690d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            pendingtextno: "4",
            location: "Australia, Sydney",
            name: "Amelia T.",
            age: 30,
            bio: "Wildlife photographer with a passion for conservation. Always chasing the next breathtaking shot. 📸🌏",
            isFrind: null,
            match: "35%"
        }
    ]

    let curr = 0;
    let isAnimating = false;
    let lastIndex = -1;
    let soundEnabled = true;

    const soundEffects = {
        swipe: new Audio("./music/ufo-whistle-whoosh-vadi-sound-1-00-02.mp3"),
        superLike: new Audio("./music/glock-new-idea-twinkle-om-fx-1-00-04.mp3"),
        denyed: new Audio("./music/nope-male-tomas-herudek-1-00-01.mp3"),
    };

    function select(elem) {
        return document.querySelector(elem);
    }

    function playSound(effect) {
        if (soundEnabled && soundEffects[effect]) soundEffects[effect].play();
    }

    function showSuperLikeAnimation() {
        const anim = select("#superLikeAnimation");
        anim.classList.remove("hidden");
        gsap.fromTo(anim, { opacity: 0, scale: 1 }, {
            opacity: 1,
            scale: 2,
            duration: 0.8,
            onComplete: () => anim.classList.add("hidden")
        });
    }

    select(".super-like").addEventListener("click", function () {
        showSuperLikeAnimation();
        playSound("superLike");
    });

    function setData(index) {
        const user = users[index];
        select('.profile-img img').src = user.profilepic;
        select('.maincard img').src = user.displaypic;
        select('.badge h5').textContent = user.pendingtextno;
        select('.location h3').textContent = user.location;
        select('.name h1').textContent = user.name;
        select('.age').textContent = user.age;
        select('.bio p').textContent = user.bio;
        select(".match-percentage").textContent = user.match;
    }


    function imageChange() {
        if (!isAnimating) {
            isAnimating = true;

            lastIndex = curr;
            curr = (curr + 1) % users.length;
            setData(curr);

            let main = select('.maincard');
            let incoming = select('.incoming');

            select('.incoming img').src = users[(curr + 1) % users.length].displaypic;

            let tl = gsap.timeline({
                onComplete: function () {
                    isAnimating = false;

                    incoming.classList.remove('z-[2]');
                    incoming.classList.add('z-[3]', 'maincard');
                    main.classList.remove('z-[3]', 'maincard');
                    main.classList.add('z-[2]', 'incoming');

                    gsap.set(main, { scale: 1, opacity: 1 });
                    select('.maincard img').src = users[curr].displaypic;


                    main.classList.remove('maincard');
                    incoming.classList.remove('incoming');
                    main.classList.add('incoming');
                    incoming.classList.add('maincard');

                }
            });

            tl.to(".maincard", { scale: 1.1, opacity: 0, ease: "circ.out", duration: 0.9 }, "a")
                .from(".incoming", { scale: 0.9, opacity: 0, ease: "circ.out", duration: 1.1 }, "a");
        }
    }

    select(".undo").addEventListener("click", function () {
        if (lastIndex > -1) {
            curr = lastIndex;
            lastIndex = -1;
            setData(curr);
        }
    });

    let deny = select(".deny");
    let accept = select(".accept");

    deny.addEventListener("click", () => {
        imageChange();
        playSound("denyed");

        gsap.from(".details .element", {
            opacity: 0,
            y: "100%",
            duration: 1.5,
            stagger: 0.06,
            ease: Power4.easeInOut
        });
    });

    accept.addEventListener("click", () => {
        imageChange();
        playSound("swipe");

        gsap.from(".details .element", {
            opacity: 0,
            y: "100%",
            duration: 1.5,
            stagger: 0.06,
            ease: "power4.out"
        });
    });

    function containerCreator() {
        document.querySelectorAll(".element").forEach(element => {
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, `overflow-hidden`);
            div.appendChild(element);
            select(".details").appendChild(div);
        });
    }

    function checkScreenSize() {
        const overlay = document.getElementById("desktopWarning");
        const mainContent = document.getElementById("mainContent");

        if (window.innerWidth < 780) {
            overlay.classList.add("hidden");
            mainContent.classList.remove("hidden");
        } else {
            overlay.classList.remove("hidden");
            mainContent.classList.add("hidden");
        }
    }

    containerCreator();
    checkScreenSize();

    select('.maincard img').src = users[curr].displaypic;
    select('.incoming img').src = users[(curr + 1) % users.length].displaypic;

    setData(curr);

    window.addEventListener("resize", checkScreenSize);
});
