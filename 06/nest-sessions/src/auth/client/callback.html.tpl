<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Аутентификация...</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background: #f5f5f5;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .callback-container {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 90%;
            max-width: 400px;
        }

        .spinner {
            width: 40px;
            height: 40px;
            margin: 1.5rem auto;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #0084ff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .message {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .error-message {
            color: #e74c3c;
            margin-top: 1rem;
            display: none;
        }
    </style>
</head>
<body>
    <div class="callback-container">
        <div class="spinner"></div>
        <p class="message">Завершение аутентификации...</p>
        <p class="error-message">Ошибка аутентификации. Перенаправление на страницу входа...</p>
    </div>

    <script>
        const sid = "{{sid}}";

        if (sid) {
            localStorage.setItem('sid', sid);

            // Небольшая задержка для визуальной обратной связи
            setTimeout(() => {
                window.location.href = '/profile.html';
            }, 1500);
        } else {
            // Показать сообщение об ошибке
            document.querySelector('.spinner').style.display = 'none';
            document.querySelector('.message').style.display = 'none';
            document.querySelector('.error-message').style.display = 'block';

            // Перенаправление обратно на страницу входа после отображения ошибки
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        }
    </script>
</body>
</html>