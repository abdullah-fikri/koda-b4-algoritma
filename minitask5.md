# flowchart menghitung luas dan keliling lingkaran

```mermaid
flowchart TD
A@{ shape: circle, label: "mulai"} -->
B@{ shape: lean-r, label: "jari-jari = r"} --> 
C@{ shape: lean-r, label: "rumus: 
luas = π x r x r 
 keliling = 2 x π x r"} -->
D@{ shape: diamond, label: "r%7"} --iya--> E
D --tidak--> H@{ shape: rect, label: "3,14"}
H --> G
E@{ shape: rect, label: "22/7"} -->
G@{ shape: lean-r, label: "hasil"} -->
F@{ shape: dbl-circ, label: "selesai"}


```