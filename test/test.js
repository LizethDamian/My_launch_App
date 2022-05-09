const MissionCommander = require('weekly_mission_3\my_launch_app\App\mission_comander.js');

describe("Prueba práctica 1", () => {
    test('Caso de prueba 1: creacion de un objeto', () => {
        const liz = new MissionCommander("Lizeth")

        expect(liz.name).toBe("Lizeth");
    });
})