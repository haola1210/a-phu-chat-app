# Chat App

## Client structure:
- 5 phần chính
- 3 phần: pages, components, contexts (**A**)
- 2 phần: hooks, utils  (**B**)

### phần A:
- mỗi page hay component tạo 1 folder,
- trong folder đó luôn có 1 file index.js để export hết tất cả ra ngoài 
- các component có liên quan nhẹ thì chung folder cũng không sao (vd: popup, popup-with-other-method,...)
- các page mà có những component liên quan nhẹ thì cũng có thể để các component đó trong cùng 1 folder với page
- các component mà có thể reuse thì phải tạo riêng 1 folder.
- các context cũng tương tự như trên, riêng các hooks mà liên quan nhẹ hoặc chỉ dùng cho 1 context đó thì để chung folder cũng đc
### phần B:
- các hooks dùng chung hoặc reuse đc thì tạo 1 file trong folder hooks
- index.js trong folder hooks là để export chúng ra.
- tương tự với utils
<br> <br>
*Chú ý làm theo các mẫu đã tạo sẵn*

## import:
- theo mẫu có sẵn.
- sử dụng alias (@) không import trực tiếp (vd: ../../components/A/A.jsx)
- vd trên đổi thành: @components/A (ko cần vào trong A.jsx vì đã có index.js trong folder A export r)
- nếu trong cùng 1 folder thì cứ import trực tiếp (./abc.js)