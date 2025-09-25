import { Button } from "@/components/ui/button";
import LoginPage from "./modules/login/LoginPage";
function App() {
  return (
    <>

      <b className="mx-24 mb-9 w-2xl mt-9">Login form:</b>
      <LoginPage>
      </LoginPage>
      <p className="mx-24 mb-9 w-2xl">
        <b>Vì sao phải sử dụng key trong list rendering</b>
        <br />
        Thuộc tính key trong lệnh for (hoặc v-for trong Vue, map trong React) là
        bắt buộc vì nó giúp framework (như React, Vue) nhận dạng, theo dõi và
        tối ưu hóa quá trình cập nhật các phần tử trong một danh sách. Nếu không
        có key, framework sẽ dựa vào thứ tự của các phần tử, dẫn đến hiệu suất
        kém và lỗi hiển thị khi danh sách thay đổi, chẳng hạn như khi sắp xếp
        hoặc xóa phần tử.{" "}
      </p>
    </>
  );
}

export default App;
