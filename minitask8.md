# cek ongkir

```mermaid
flowchart LR
a@{ shape: circle, label: "mulai"} -->
b@{ shape: lean-r, label: "jarak"} -->
c@{ shape: diamond, label: "jarak  <=5 "} --iya-->
d@{ shape: rect , label: " ongkir=8000"}--> f
c --tidak--> e@{ shape: rect , label: "jarak - 5 "}-->
h@{ shape: rect , label: "ongkir = jarak * 3000 + 8000"}-->

f@{ shape: lean-r , label: "ongkir"} -->
g@{ shape: dbl-circ , label: "selesai"} 
```