function generateNewRecord() {
    const records = [
        { name: "A", value: 10 },
        { name: "B", value: 30 },
        { name: "C", value: 50 },
        { name: "D", value: 40 },
        { name: "E", value: 20 }
    ];

    const averageValue = records.reduce((sum, record) => sum + record.value, 0) / records.length;
    const maxValue = Math.max(...records.map(record => record.value));
    const firstValue = records.find(record => record.value >= 20 && record.value <= 40)?.value || "No value found";

    const newRecord = {
        name: "NewRecord",
        averageValue: averageValue,
        maxValue: maxValue,
        firstValue: firstValue
    };

    records.push(newRecord);
    console.log("Updated Records:", records);
}

generateNewRecord();
