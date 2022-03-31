let products = [
    {
        id: 1,
        name: 'Polera',
        colors: ['Blanco'],
        cost: 1250.50,
        price: 1500,
    },
    {
        id: 2,
        name: 'Corto',
        color: ['Rojo', ' blanco'],
        cost: 1250.50,
        price: 1500,
    },
    {
        id: 3,
        name: 'Polera',
        color: 'Blanco',
        cost: 1250.50,
        price: 1500,
    },
];

for (const product of products) {
    console.log(JSON.stringify(product));
}

// Interar un string
let productName = "Pelera de color rojo.";
let letters = "";

for (const char of productName) {
    letters += char;
}
console.log(letters);

let diff = {
    "changes": [
        {
            "changeType": "ArrayChange",
            "globalId": {
                "valueObject": "java.util.GregorianCalendar",
                "ownerId": {
                    "entity": "com.openkm.db.bean.TaskManagerTask",
                    "cdoId": 35
                },
                "fragment": "lastModified"
            },
            "property": "fields",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "elementChanges": [
                {
                    "elementChangeType": "ElementValueChange",
                    "index": 12,
                    "leftValue": 40,
                    "rightValue": 41
                },
                {
                    "elementChangeType": "ElementValueChange",
                    "index": 13,
                    "leftValue": 1,
                    "rightValue": 41
                },
                {
                    "elementChangeType": "ElementValueChange",
                    "index": 14,
                    "leftValue": 0,
                    "rightValue": 841
                }
            ]
        },
        {
            "changeType": "ValueChange",
            "globalId": {
                "valueObject": "java.util.GregorianCalendar",
                "ownerId": {
                    "entity": "com.openkm.db.bean.TaskManagerTask",
                    "cdoId": 35
                },
                "fragment": "lastModified"
            },
            "property": "time",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": 1634276401000,
            "right": 1634276501841
        },
        {
            "changeType": "ValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerTask",
                "cdoId": 35
            },
            "property": "subject",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": "Tarea 1",
            "right": "Tarea update 1"
        }
    ]
}
for (const change of diff.changes) {
    console.log(change.property);
    console.log(change.left);
    console.log(change.right);
    //console.log(JSON.stringify(change));
}
