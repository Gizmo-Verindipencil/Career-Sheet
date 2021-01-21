/**
 * 資格・免許のセッター
 */
class QualificationSetter {
    /**
     * セット処理の実行
     */
    execute = () => {
        // 資格データを取得
        const service = new QualificationService();
        const qualifications = service.getAll();

        for (const qualification of qualifications) {
            $("#qualification").append(`<p>${qualification.name} ${qualification.score}</p>`);
        }

        // セットした内容を表示
        $("section#qualification-container").show();
    }
}