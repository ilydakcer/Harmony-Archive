document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("searchInput");
  const listEl = document.getElementById("artists");

  if (!inputEl || !listEl) return;

  async function searchArtists(query) {
    listEl.innerHTML = "<p>Yükleniyor...</p>";

    try {
      const res = await fetch(
        "https://musicbrainz.org/ws/2/artist/?query=" +
          encodeURIComponent(query) +
          "&fmt=json",
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );

      const data = await res.json();
      listEl.innerHTML = "";

      if (!data.artists || data.artists.length === 0) {
        listEl.innerHTML =
          "<div class='alert alert-warning'>Sonuç bulunamadı.</div>";
        return;
      }

      data.artists.slice(0, 12).forEach((artist) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-3";

        col.innerHTML = `
          <div class="card p-3 h-100">
            <h5>${artist.name}</h5>
            <p>Ülke: ${artist.country || "Bilinmiyor"}</p>
            <a href="detail.html?name=${encodeURIComponent(
              artist.name
            )}" class="btn btn-sm btn-primary mt-2">
              Detay
            </a>
          </div>
        `;

        listEl.appendChild(col);
      });
    } catch {
      listEl.innerHTML =
        "<div class='alert alert-danger'>Veri alınamadı.</div>";
    }
  }

  inputEl.addEventListener("input", () => {
    const value = inputEl.value.trim();
    if (value.length >= 2) {
      searchArtists(value);
    } else {
      listEl.innerHTML = "";
    }
  });
});

