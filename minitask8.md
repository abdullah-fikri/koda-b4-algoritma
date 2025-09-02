# cek ongkir

```mermaid
flowchart LR
a@{ shape: circle, label: "mulai"} -->
b@{ shape: lean-r, label: "jarak"} -->
c@{ shape: diamond, label: "< 5km "} --tidak-->
d@{ shape: rect , label: "8000"}--> f
c --iya--> e@{ shape: rect , label: "8000 + 2000/km"}-->
f@{ shape: lean-r , label: "hasil"} -->
g@{ shape: dbl-circ , label: "selesai"}
```