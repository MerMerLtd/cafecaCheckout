# cafecaCheckout

## Deploy
```shell
# 安裝函式庫
bash <(curl https://raw.githubusercontent.com/Luphia/SIMPLE/master/shell/install-simple.sh -kL)
sudo apt-get update
sudo apt-get install openssl libtool autoconf automake uuid-dev build-essential gcc g++ software-properties-common unzip make git libcap2-bin python -y

# 初始化資料夾
sudo mkdir /etc/cafecaCheckout
sudo chown ubuntu /etc/cafecaCheckout
sudo mkdir /etc/Cafeca-Backend
sudo chown ubuntu /etc/Cafeca-Backend

# 複製專案
https://github.com/MerMerLtd/cafecaCheckout
https://github.com/MerMerLtd/Cafeca-Backend

# 安裝相依套件
cd /etc/cafecaCheckout && npm i && npm i --dev live-server
cd /etc/Cafeca-Backend && npm i

# 設定參數
mkdir /etc/Cafeca-Backend/private/
cp /etc/Cafeca-Backend/sample.config.toml /etc/Cafeca-Backend/private/config.toml
vi /etc/Cafeca-Backend/private/config.toml
```shell
# CafecaBackend Default Config

title = "CafecaBackend"

[base]
folder = "CafecaBE"
static = "/etc/cafecaCheckout"
debug = false

[blockchain]
type = "ethereum"

[database]
type = "firebase"

[api]
pathname = [
  "get | /,/version | Static.Utils.readPackageInfo",
  "get | /api/questions | Bot.FindCafeca.getQuestions",
  "get | /api/suggestion | Bot.FindCafeca.getSuggestion",
  "get | /api/store/:storeID | Bot.FindCafeca.getStore",
  "get | /policy/* | Static.Utils.readPackageInfo"
]
```

# 啟動伺服器
```shell
pm2 start /etc/Cafeca-Backend/ --name Cafeca
```
