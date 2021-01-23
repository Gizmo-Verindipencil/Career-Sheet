/**
 * 資格・免許のセッター
 */
class QualificationSetter {
    /**
     * セット処理の実行
     */
    execute = () => {
        // 資格データを取得
        const Repository = new QualificationRepository();
        const qualifications = Repository.getAll();

        for (const qualification of qualifications) {
            $("#qualification").append(`<p>${qualification.name} ${qualification.score}</p>`);
        }

        // セットした内容を表示
        $("section#qualification-container").show();
    }
}