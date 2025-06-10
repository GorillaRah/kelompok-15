const smaData = [
            {
                id: 1,
                nama: "SMA Negeri 1 Yogyakarta",
                alamat: "Jl. HOS Cokroaminoto No. 10, Pakuncen, Wirobrajan",
                telepon: "(0274) 513454",
                koordinat: [-7.799701,110.352524],
                website: "https://www.sman1yogya.sch.id/id",
                deskripsi: "SMAN 1 Yogyakarta didirikan pada tahun 1930 dengan nama awal Algemeene Middelbaar School A Afdeling Yogyakarta (AMS A), dan pada 1957 menerima gelar “Teladan” melalui dekrit resmi Kemdikbud. Sekolah ini dikenal sebagai pusat unggulan Cambridge International hingga sekitar 2013 dan aktif menyelenggarakan program akselerasi serta kelas Cambridge sejak tahun 2004–2005. Sebagai catatan menarik, sejak 1982 SMAN 1 memiliki band ekskul bernama “Bhinneka Svara” yang telah meraih prestasi di tingkat provinsi, dan vokal Islami “Uswah Voice” juga kerap aktif dalam berbagai kompetisi .",
                akreditasi: "A",
                tahunBerdiri: "1947"
            },
            {
                id: 2,
                nama: "SMA Negeri 2 Yogyakarta",
                alamat: "Jl. Bener No. 30, Tegalrejo",
                telepon: "(0274) 563647",
                koordinat: [-7.778028,110.353037],
                website: "https://www.sman2jogja.sch.id/",
                deskripsi: "SMA Negeri 2 Yogyakarta adalah sekolah dengan program unggulan dalam bidang sains dan teknologi. Memiliki fasilitas laboratarium yang lengkap dan modern.",
                akreditasi: "A",
                tahunBerdiri: "1960"
            },
            {
                id: 3,
                nama: "SMA Negeri 3 Yogyakarta",
                alamat: "Jl. Laksda Laut Yos Sudarso No. 7, Kotabaru, Gondokusuman",
                telepon: "(0274) 512856",
                koordinat: [-7.786487,110.373626],
                website: "https://sma3jogja.sch.id/",
                deskripsi: "SMAN 3 Yogyakarta bermula dari AMS-B yang berdiri pada 1919, lalu resmi menjadi SMAN 3 pada tahun 1964. Julukan “Padmanaba” diambil dari nama organisasi siswa AMS-B dulu dan hingga kini melekat erat pada sekolah. Gedung utamanya dinyatakan sebagai cagar budaya sejak 2010 dan masih mempertahankan gaya arsitektur kolonial Belanda dengan jendela tinggi dan tiang bergaya Yunani. Pada masa Agresi Militer 1947–1948, beberapa siswanya suka rela menjadi Tentara Pelajar dan gugur dalam mempertahankan kemerdekaan. Tradisi ulang tahun sekolah selalu dirayakan setiap tanggal 19 September sebagai penghormatan terhadap sejarah perjuangan mereka .",
                akreditasi: "A",
                tahunBerdiri: "1955"
            },
            {
                id: 4,
                nama: "SMA Negeri 4 Yogyakarta",
                alamat: "Jl. Magelang, Karangwaru Lor, Tegalrejo",
                telepon: "(0274) 513245",
                koordinat: [-7.772003,110.362599],
                website: "https://patbhe-jogja.sch.id/",
                deskripsi: "SMA Negeri 4 Yogyakarta terkenal dengan program unggulan bahasa dan budaya. Sekolah ini aktif dalam kegiatan seni dan budaya tradisional Yogyakarta.",
                akreditasi: "A",
                tahunBerdiri: "1965"
            },
            {
                id: 5,
                nama: "SMA Negeri 5 Yogyakarta",
                alamat: "Jl. Nyi Pembayun No. 39, Prenggan, Kotagede",
                telepon: "(0274) 377400",
                koordinat: [-7.822470,110.399392],
                website: "https://sman5yk.sch.id/",
                deskripsi: "SMA Negeri 5 Yogyakarta atau Puspanegara berlokasi di kawasan bersejarah Kotagede. Sekolah ini memiliki program unggulan dalam bidang sejarah dan arkeologi.",
                akreditasi: "A",
                tahunBerdiri: "1983"
            },
            {
                id: 6,
                nama: "SMA Negeri 6 Yogyakarta",
                alamat: "Jl. C. Simanjuntak No. 2, Terban, Gondokusuman",
                telepon: "(0274) 513335",
                koordinat: [-7.781386,110.373105],
                website: "https://www.sman6yogya.sch.id/",
                deskripsi: "SMA Negeri 6 Yogyakarta dikenal dengan program pertukaran pelajar internasional dan kegiatan ekstrakurikuler yang beragam, termasuk pramuka dan kegiatan sosial.",
                akreditasi: "A",
                tahunBerdiri: "1988"
            },
            {
                id: 7,
                nama: "SMA Negeri 7 Yogyakarta",
                alamat: "Jl. MT Haryono No. 47, Suryodiningratan, Mantrijeron",
                telepon: "(0274) 377740",
                koordinat: [-7.813773,110.358636],
                website: "https://sman7jogja.sch.id/",
                deskripsi: "SMA Negeri 7 Yogyakarta memiliki fokus pada pengembangan karakter dan prestasi akademik yang seimbang. Terletak di lokasi strategis dekat dengan pusat kota.",
                akreditasi: "A",
                tahunBerdiri: "1989"
            },
            {
                id: 8,
                nama: "SMA Negeri 8 Yogyakarta",
                alamat: "Jl. Sidobali No. 1, Muja Muju, Umbulharjo",
                telepon: "(0274) 513493",
                koordinat: [-7.800403,110.395478],
                website: "https://sman8yogya.sch.id/",
                deskripsi: "SMA Negeri 8 Yogyakarta terkenal dengan program olahraga dan kesenian yang aktif. Memiliki fasilitas olahraga yang lengkap dan tim yang berprestasi.",
                akreditasi: "A",
                tahunBerdiri: "1990"
            },
            {
                id: 9,
                nama: "SMA Negeri 9 Yogyakarta",
                alamat: "Jl. Sagan No. 1, Terban, Gondokusuman",
                telepon: "(0274) 513434",
                koordinat: [-7.781559,110.376337],
                website: "https://sma9jogja.sch.id/",
                deskripsi: "SMA Negeri 9 Yogyakarta berlokasi dekat dengan Universitas Gadjah Mada, memberikan suasana akademis yang kondusif untuk pembelajaran.",
                akreditasi: "A",
                tahunBerdiri: "1991"
            },
            {
                id: 10,
                nama: "SMA Negeri 10 Yogyakarta",
                alamat: "Jl. Gandekan No. 6, Ngupasan, Gondomanan",
                telepon: "(0274) 562458",
                koordinat: [-7.797824,110.362804],
                website: "https://sman10yogya.sch.id/",
                deskripsi: "SMA Negeri 10 Yogyakarta memiliki program unggulan dalam teknologi informasi dan komunikasi, dengan fasilitas komputer dan internet yang modern.",
                akreditasi: "A",
                tahunBerdiri: "1995"
            },
            {
                id: 11,
                nama: "SMA Negeri 11 Yogyakarta",
                alamat: "Jl. AM Sangaji No. 50, Cokrodiningratan, Jetis",
                telepon: "(0274) 565898",
                koordinat: [-7.777118,110.367974],
                website: "https://sma11jogja.sch.id/",
                deskripsi: "SMA Negeri 11 Yogyakarta adalah sekolah termuda di antara SMA Negeri di Yogyakarta, dengan fasilitas modern dan program pembelajaran inovatif.",
                akreditasi: "A",
                tahunBerdiri: "2008"
            }
        ];

        // Initialize map
        const map = L.map('map').setView([-7.797068, 110.370529], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);

        // Store markers for easy access
        const markers = {};

        // Custom icon for schools
        const schoolIcon = L.divIcon({
            className: 'custom-school-marker',
            html: '<div style="background-color: #e74c3c; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        // Add markers and create sidebar items
        function initializeMap() {
            const schoolList = document.getElementById('schoolList');

            smaData.forEach(school => {
                // Create marker
                const marker = L.marker(school.koordinat, { icon: schoolIcon }).addTo(map);
                
                // Create popup content
                const popupContent = `
                    <div class="popup-content">
                        <div class="popup-title">${school.nama}</div>
                        <div class="popup-info"><strong>📍 Alamat:</strong><br>${school.alamat}</div>
                        <div class="popup-info"><strong>📞 Telepon:</strong> ${school.telepon}</div>
                        <div class="popup-info"><strong>🏆 Akreditasi:</strong> ${school.akreditasi}</div>
                        <div class="popup-info"><strong>📅 Tahun Berdiri:</strong> ${school.tahunBerdiri}</div>
                        <div class="popup-info"><strong>ℹ️ Deskripsi:</strong><br>${school.deskripsi}</div>
                        <a href="${school.website}" target="_blank" class="popup-link">🌐 Kunjungi Website</a>
                    </div>
                `;
                
                marker.bindPopup(popupContent);
                markers[school.id] = marker;

                // Create sidebar item
                const schoolItem = document.createElement('div');
                schoolItem.className = 'school-item';
                schoolItem.innerHTML = `
                    <div class="school-name">${school.nama}</div>
                    <div class="school-address">📍 ${school.alamat}</div>
                    <div class="school-phone">📞 ${school.telepon}</div>
                `;

                // Add click event to sidebar item
                schoolItem.addEventListener('click', () => {
                    // Remove active class from all items
                    document.querySelectorAll('.school-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Add active class to clicked item
                    schoolItem.classList.add('active');
                    
                    // Center map on school and open popup
                    map.setView(school.koordinat, 16);
                    markers[school.id].openPopup();
                });

                schoolList.appendChild(schoolItem);
            });
        }

        // Initialize the application
        initializeMap();

        // Add click event to markers to highlight corresponding sidebar item
        Object.keys(markers).forEach(schoolId => {
            markers[schoolId].on('click', () => {
                const schoolItems = document.querySelectorAll('.school-item');
                schoolItems.forEach(item => item.classList.remove('active'));
                schoolItems[schoolId - 1].classList.add('active');
            });
        });

        // Add geolocation feature
        map.locate({setView: false, maxZoom: 16});

        function onLocationFound(e) {
            const radius = e.accuracy / 2;
            L.marker(e.latlng).addTo(map)
                .bindPopup(`Lokasi Anda berada dalam radius ${radius} meter dari titik ini`).openPopup();
            L.circle(e.latlng, radius).addTo(map);
        }

        function onLocationError(e) {
            console.log('Geolocation error: ' + e.message);
        }

        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);
