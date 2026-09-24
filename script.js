<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validate Form bằng JavaScript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <form id="myForm">
            <!-- Trường Họ tên -->
            <div class="form-group">
                <label for="fullname">Họ tên</label>
                <input type="text" id="fullname" autocomplete="off" />
                <div id="fullname-error" class="error-text"></div>
            </div>

            <!-- Trường Email -->
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" autocomplete="off" />
                <div id="email-error" class="error-text"></div>
            </div>

            <!-- Trường SĐT -->
            <div class="form-group">
                <label for="phone">SĐT</label>
                <input type="text" id="phone" autocomplete="off" />
                <div id="phone-error" class="error-text"></div>
            </div>
            
            <button type="submit" id="submit-btn">Gửi</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
