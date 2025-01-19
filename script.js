const socket = new WebSocket('ws://localhost:8080'); // WebSocketサーバーに接続

// WebSocketでメッセージを受信したとき
socket.onmessage = (event) => {
    const message = event.data;
    document.getElementById('card-value').textContent = message; // 自分の選択を表示
    const selectionsList = document.getElementById('selections-list');
    const newSelection = document.createElement('li');
    newSelection.textContent = `メンバーの選択: ${message}`;
    selectionsList.appendChild(newSelection);
};

// カード選択時の処理
function selectCard(value) {
    document.getElementById('card-value').textContent = value;
    socket.send(value); // 選択したカードをサーバーに送信
}
