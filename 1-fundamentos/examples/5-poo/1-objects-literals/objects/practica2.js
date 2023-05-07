let json = {
    "changes": [
        {
            "changeType": "NewObject",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 24
            }
        },
        {
            "changeType": "ObjectRemoved",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 23
            }
        },
        {
            "changeType": "InitialValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 24
            },
            "property": "tenant",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": null,
            "right": 1
        },
        {
            "changeType": "InitialValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 24
            },
            "property": "name",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": null,
            "right": "openkm"
        },
        {
            "changeType": "InitialValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 24
            },
            "property": "active",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": null,
            "right": true
        },
        {
            "changeType": "InitialValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 24
            },
            "property": "description",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": null,
            "right": "openkm descripcion"
        },
        {
            "changeType": "TerminalValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 23
            },
            "property": "tenant",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": 1,
            "right": null
        },
        {
            "changeType": "TerminalValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 23
            },
            "property": "name",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": "crm",
            "right": null
        },
        {
            "changeType": "TerminalValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 23
            },
            "property": "active",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": true,
            "right": null
        },
        {
            "changeType": "TerminalValueChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 23
            },
            "property": "description",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": "",
            "right": null
        },
        {
            "changeType": "ArrayChange",
            "globalId": {
                "valueObject": "java.util.GregorianCalendar",
                "ownerId": {
                    "entity": "com.openkm.db.bean.TaskManagerTask",
                    "cdoId": 36
                },
                "fragment": "lastModified"
            },
            "property": "fields",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "elementChanges": [
                {
                    "elementChangeType": "ElementValueChange",
                    "index": 12,
                    "leftValue": 38,
                    "rightValue": 51
                },
                {
                    "elementChangeType": "ElementValueChange",
                    "index": 13,
                    "leftValue": 35,
                    "rightValue": 6
                },
                {
                    "elementChangeType": "ElementValueChange",
                    "index": 14,
                    "leftValue": 0,
                    "rightValue": 765
                }
            ]
        },
        {
            "changeType": "ValueChange",
            "globalId": {
                "valueObject": "java.util.GregorianCalendar",
                "ownerId": {
                    "entity": "com.openkm.db.bean.TaskManagerTask",
                    "cdoId": 36
                },
                "fragment": "lastModified"
            },
            "property": "time",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": 1635961115000,
            "right": 1635961866765
        },
        {
            "changeType": "ReferenceChange",
            "globalId": {
                "entity": "com.openkm.db.bean.TaskManagerTask",
                "cdoId": 36
            },
            "property": "project",
            "propertyChangeType": "PROPERTY_VALUE_CHANGED",
            "left": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 23
            },
            "right": {
                "entity": "com.openkm.db.bean.TaskManagerProject",
                "cdoId": 24
            }
        }
    ]
}

let rightChange = json.changes.find(change => change.changeType === 'InitialValueChange' && change.property === 'name' && change.globalId.cdoId === 24);
console.log(rightChange);
console.log(rightChange.right);

let leftChange = json.changes.find(change => change.changeType === 'TerminalValueChange' && change.property === 'name' && change.globalId.cdoId === 23);
console.log(leftChange);
console.log(leftChange.left);