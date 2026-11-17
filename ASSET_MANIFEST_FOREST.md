# 第一批森林環境素材清單（製作中）

分支：art/forest-visual-overhaul
美術方向：手繪 2D 東方奇幻、純俯視角、自然林地、中央戰鬥區保持清晰。

## 本輪素材設計稿

已生成一張森林環境物件素材表，作為第一批素材的造型與風格參考。它不是可直接載入的正式 sprite atlas：接入遊戲前仍需逐件裁切、清理透明背景、統一畫布與錨點、輸出 PNG/WebP，並建立 atlas frame metadata。

## 素材項目與建議 key

| Asset key | 內容 | 建議用途 |
|---|---|---|
| environment/ancient-tree-large | 大型盤根古樹 | 場景邊界、遮擋層 |
| environment/ancient-tree-blossom | 開花古樹 | 地標、裝飾 |
| environment/bamboo-cluster-large | 高竹叢 | 左右邊界 |
| environment/bamboo-cluster-small | 小竹叢 | 地面裝飾 |
| environment/mossy-rock-cluster-a | 苔石組 A | 阻擋物、地形邊界 |
| environment/mossy-rock-cluster-b | 苔石組 B | 阻擋物、地形邊界 |
| environment/flat-stone-cluster | 扁平石塊 | 石徑與地面裝飾 |
| environment/standing-rock-cluster | 直立岩石組 | 地標、阻擋物 |
| environment/forest-shrine | 古亭燈／祭壇 | 場景地標 |
| environment/engraved-stele | 古代石碑 | 場景地標 |
| environment/fern-a | 蕨類 | 地面裝飾 |
| environment/broadleaf-plant-a | 闊葉植物 | 地面裝飾 |
| environment/white-blossom-bush | 白花灌木 | 地面裝飾 |
| environment/yellow-flower-clump | 黃花植物 | 地面裝飾 |
| environment/grass-clump-a | 草叢 A | 地面裝飾 |
| environment/blue-flower-clump | 藍花植物 | 地面裝飾 |
| environment/clover-patch | 苜蓿草 | 地面裝飾 |
| environment/fallen-leaves-a | 黃葉 | 地面散佈 |
| environment/fallen-leaves-b | 零散葉片 | 地面散佈 |
| environment/petals-a | 花瓣 | 動態或地面裝飾 |
| environment/mushroom-cluster | 蘑菇 | 地面裝飾 |
| effects/spirit-flame-a | 青色靈火 | 動態特效 |

## 接入規則

1. 每個物件需有獨立透明 PNG/WebP，不可把整張素材表直接當作單一遊戲物件。
2. 裁切時保留完整輪廓與自然陰影，移除素材表的格紋預覽背景；確認 alpha 通道是真透明。
3. 統一光源方向、色彩飽和度、輪廓清晰度與陰影基準。
4. 每件素材設定 anchor、顯示尺寸、zIndex、collision shape（如需要）與可否被角色遮擋。
5. 大型樹冠放入 Front Props 或依角色 y-sort 分層；樹幹、石碑、巨石碰撞區獨立設定。
6. 靈火使用獨立影格或小型動畫序列，不把靜態圖假裝成動畫。
7. 第一輪只挑古樹、竹叢、苔石、祭壇、石碑、蕨類六種代表素材做 iPhone 畫面測試，確認風格和比例後再批量製作。

## 狀態

- [x] 生成第一批森林環境物件造型參考表
- [x] 建立素材 key 與用途清單
- [ ] 逐件裁切、去背與標準化
- [x] 將第一批獨立 SVG 環境素材加入 assets/environment（古樹、竹叢、苔石、祭壇）
- [x] 建立 PixiJS 獨立 SVG 載入與環境圖層（目前為四個獨立 texture，尚未合併 atlas）
- [ ] 在 iPhone Safari 驗證尺寸、透明度、層級和效能

注意：目前已將四個獨立 SVG 素材提交至 GitHub，並接入 PixiJS 環境圖層；尚未完成 iPhone Safari 實機驗證、碰撞區配置、Tiled 執行時載入或正式逐格動畫。
