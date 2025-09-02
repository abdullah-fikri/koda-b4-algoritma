# flowchart menghitung luas dan keliling lingkaran

```mermaid
flowchart TD
A@{ shape: circle, label: "mulai"} -->
B@{ shape: lean-r, label: "identifikasi jari-jarinya (r)"} --> 
C@{ shape: lean-r, label: "masukkan kedalam rumus: luas = π x r x r 
 keliling = 2 x π x r"} -->
 
E@{ shape: lean-r, label: "gunakan π 22/7 (jika angka bisa dibagi 7) jika tidak maka gunakan 3,14"} -->D@{ shape: rect, label: "masukkan nilai jari-jari ke dalam rumus dan hitung"} -->
F@{ shape: dbl-circ, label: "selesai"}


```