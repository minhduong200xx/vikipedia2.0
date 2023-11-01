const pages = [
  {
    id: "1",
    title: "Hà Nội",
    subtitle: [
      {
        key: "1",
        href: "#name",
        title: "Tên gọi",
      },
      {
        key: "2",
        href: "#history",
        title: "Lịch sử",
      },
      {
        key: "3",
        href: "#geography",
        title: "Địa lý",
      },
    ],
    paragraph: [
      {
        id: 1,
        segment: [
          {
            content:
              'Trước khi có tên gọi như hiện nay, Hà Nội đã trải qua nhiều tên gọi khác nhau. Tên gọi "Hà Nội" bắt đầu được dùng làm địa danh ở Việt Nam từ năm Minh Mạng thứ 12 (năm 1831) khi có một tỉnh có tên là tỉnh Hà Nội được thành lập ở Bắc Thành. "Hà Nội" viết bằng chữ Hán là "河內", nghĩa là "bao quanh bởi các con sông", tên gọi này phản ánh vị trí địa lý của tỉnh Hà Nội. Tỉnh này nằm giữa hai con sông là sông Nhị ở phía đông bắc và sông Thanh Quyết ở phía tây nam.',
          },
          {
            content:
              "Tỉnh Hà Nội gồm có bốn phủ là Hoài Đức, Thường Tín, Ứng Hoà và Lý Nhân. Toà thành nơi có đặt trị sở của tỉnh Hà Nội, tức tỉnh lị của tỉnh Hà Nội, được gọi là thành Hà Nội theo tên tỉnh. Thành Hà Nội nằm trên địa phận hai huyện Thọ Xương và Vĩnh Thuận. Cả hai huyện Thọ Xương và Vĩnh Thuận đều cùng thuộc phủ Hoài Đức. Ngày 1 tháng 10 năm 1888, vua Đồng Khánh ký chỉ dụ cắt toàn bộ huyện Thọ Xương và một phần huyện Vĩnh Thuận của tỉnh Hà Nội làm nhượng địa cho Pháp để Pháp thành lập thành phố Hà Nội. Trước đó, ngày 19 tháng 7, tổng thống Pháp Marie François Sadi Carnot ký sắc lệnh thành lập thành phố Hà Nội trước khi có sự công nhận của Triều đình Việt Nam. Năm 1890, phủ Lý Nhân bị tách khỏi tỉnh Hà Nội, đổi thành tỉnh Hà Nam.",
          },
          {
            content:
              'Năm 1896, tỉnh lị của tỉnh Hà Nội được dời ra làng Cầu Đơ thuộc tổng Thanh Oai Thượng, huyện Thanh Oai. Để tránh trùng tên với thành phố Hà Nội, năm 1902, tỉnh Hà Nội được đổi tên thành tỉnh Cầu Đơ theo tên của tỉnh lị. Ngày 6 tháng 12 năm 1904, quan toàn quyền Đông Dương ra nghị định đổi tên tỉnh Cầu Đơ và tỉnh lị của tỉnh này thành "Hà Đông". Tên gọi "Hà Đông" là do quan đốc học tỉnh Cầu Đơ Vũ Phạm Hàm đề xuất, lấy từ một câu nói của Lương Huệ vương được ghi trong sách Mạnh Tử là "河內凶，則移其民於河東，移其粟於河內" (âm Hán Việt: Hà Nội hung, tắc di kỳ dân ư Hà Đông, di kỳ túc ư Hà Nội), có nghĩa là Hà Nội bị mất mùa thì chuyển dân ở Hà Nội sang Hà Đông, chuyển lương thực ở Hà Đông sang Hà Nội. "Hà Nội" trong câu nói trên của Lương Huệ vương là chỉ vùng phía bắc sông Hoàng Hà, còn "Hà Đông" là chỉ vùng phía đông sông Hoàng Hà, thuộc tây nam bộ tỉnh Sơn Tây của Trung Quốc ngày nay.',
          },
        ],
      },
      {
        id: 2,
        segment: [
          {
            content:
              'Những di chỉ khảo cổ tại Cổ Loa cho thấy con người đã xuất hiện ở khu vực Hà Nội từ cách đây 2 vạn năm, giai đoạn của nền văn hóa Sơn Vi. Nhưng đến thời kỳ băng tan, biển tiến sâu vào đất liền, các cư dân của thời đại đồ đá mới bị đẩy lùi lên vùng núi. Phải tới khoảng 4 hoặc 5 ngàn năm trước Công Nguyên, con người mới quay lại sinh sống ở nơi đây. Các hiện vật khảo cổ giai đoạn tiếp theo, từ đầu thời đại đồ đồng đến đầu thời đại đồ sắt, minh chứng cho sự hiện diện của Hà Nội ở cả bốn thời đại văn hóa: Phùng Nguyên, Đồng Đậu, Gò Mun và Đông Sơn. Những cư dân Hà Nội thời kỳ đó sinh sống nhờ trồng trọt, chăn nuôi và chài lưới. Giai đoạn tiền sử này tương ứng với thời kỳ của các Vua Hùng trong truyền thuyết. Thế kỷ III trước Công Nguyên, trong cuộc chiến với quân Tần từ phương Bắc, Thục Phán quyết định đóng đô ở Cổ Loa, nay là huyện Đông Anh, cách trung tâm Hà Nội khoảng 15 km. Sự xuất hiện của thành Cổ Loa ghi dấu Hà Nội lần đầu tiên trở thành một đô thị trung tâm về chính trị và xã hội. Thất bại của Thục Phán đầu thế kỷ II trước Công Nguyên đã kết thúc giai đoạn độc lập của Âu Lạc, bắt đầu giai đoạn một ngàn năm do các triều đại phong kiến Trung Hoa thống trị. Thời kỳ nhà Hán, Âu Lạc cũ được chia thành ba quận Giao Chỉ, Cửu Chân và Nhật Nam, Hà Nội khi đó thuộc quận Giao Chỉ. Vắng bóng trong sử sách suốt năm thế kỷ đầu, đến khoảng năm 454–456 thời Lưu Tống, Hà Nội mới được ghi lại là trung tâm của huyện Tống Bình.Năm 226 Nhà Hán khi cai trị Giao Châu đã đổi tên Tống Bình thành Long Uyên (hoặc Long Biên). Năm 544, Lý Bí nổi dậy chống lại nhà Lương, tự xưng hoàng đế, đặt quốc hiệu là Vạn Xuân, đóng đô ở Long Uyên. Người cháu của Lý Bí là Lý Phật Tử tới đóng đô ở Cổ Loa, nhưng nền độc lập này chỉ kéo dài tới năm 602. Thời kỳ Nhà Đường, An Nam được chia thành 12 châu với 50 huyện, Long Uyên lại được đổi thành Tống Bình, là trung tâm của An Nam đô hộ phủ. Năm 866, viên tướng nhà Đường Cao Biền xây dựng một thành trì mới, Tống Bình được đổi tên thành "Đại La" – thủ phủ của Tĩnh Hải quân. Theo truyền thuyết, khi đắp thành, Cao Biền thấy một vị thần hiện lên tự xưng là thần Long Đỗ. Vì vậy, sử sách còn gọi Thăng Long là đất "Long Đỗ". Thế kỷ X, sau chiến thắng của Ngô Quyền trước quân Nam Hán, Cổ Loa một lần nữa trở thành kinh đô của nước Việt.',
          },
        ],
      },
      {
        id: 3,
        segment: [
          {
            content:
              "Thủ đô Hà Nội nằm về phía tây bắc của trung tâm vùng đồng bằng châu thổ sông Hồng, trong phạm vi từ 20°34' đến 21°18' vĩ độ Bắc và từ 105°17' đến 106°02' kinh độ Đông, tiếp giáp với 8 tỉnh là Thái Nguyên, Vĩnh Phúc ở phía Bắc, Hà Nam, Hòa Bình phía Nam, Bắc Giang, Bắc Ninh và Hưng Yên phía Đông, Hòa Bình cùng Phú Thọ phía Tây.Hà Nội cách thành phố cảng Hải Phòng 120 km, cách thành phố Nam Định 87 km tạo thành 3 cực chính của Đồng bằng sông Hồng. Hiện nay, thành phố có diện tích 3358,6 km², chiếm khoảng 1% diện tích tự nhiên của cả nước, đứng hàng thứ 41 về diện tích trong 63 tỉnh, thành phố ở nước ta , và là 1 trong 17 thủ đô có diện tích trên 3000 km².",
          },
        ],
      },
    ],
    description: {
      items: [
        {
          key: "1",
          label: "Biệt danh",
          children: "Hà Thành, Thành phố vì hoà bình, Thủ đô ngàn năm văn hiến",
        },
        {
          key: "2",
          label: "Tên cũ",
          children: ["Đông Đô", "Đại La", "Thăng Long"],
        },
        {
          key: "3",
          label: "Quốc Gia",
          children: "Việt Nam",
        },
      ],
    },
  },
];
export default pages;
