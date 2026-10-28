
const loadBtn = document.querySelector("#loadBtn");
const status = document.querySelector("#status");
const postsList = document.querySelector("#postsList");

async function loadPosts() {
    loadBtn.disabled = true;
    status.textContent = "Загрузка публикаций...";
    postsList.replaceChildren();

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const posts = await response.json();

        for (const post of posts) {
            const li = document.createElement("li");
            li.textContent = `ID: ${post.id} — ${post.title}`;
            postsList.appendChild(li);
        }

        status.textContent = `Успешно загружено публикаций: ${posts.length}`;
    } catch (error) {
        status.textContent =
            `Ошибка загрузки: ${error.message}. Попробуйте ещё раз.`;
    } finally {
        loadBtn.disabled = false;
    }
}

loadBtn.addEventListener("click", loadPosts);
