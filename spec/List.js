'use strict';
describe("List", function() {
    var list;

    beforeEach(function() {
        list = new List();
    });
    
    it("should not be undefined when initialized",function() {
        expect(list).not.toBeUndefined();
    });

    it("should set listSize to 0 on initialization",function() {
        expect(list.listSize).toEqual(0);
    });

    it("should set pos to 0 on creation", function() {
        expect(list.pos).toEqual(0);
    });

    it("should have an empty dataStore",function() {
        expect(list.dataStore.length).toEqual(0);
    });


    describe("clear function",function(){
        
        it("should clear the list",function(){
            list.clear();
            expect(list.dataStore.length).toEqual(0);
        });

        it("should set listSize to 0", function() {
            expect(list.listSize).toEqual(0);
        });

        it("should set pos to 0", function() {
            expect(list.pos).toEqual(0);
        });
    });

    describe("find function", function() {
        it("should return the index if the element is found", function() {
            list.append("Batman");
            var found = list.find("Batman");
            expect(found).toBeGreaterThan(-1);
        });

        it("should return -1 if the element is not found",function(){
            var found = list.find("Ironman");
            expect(found).toEqual(-1);
        });
    });

    describe("toString",function() {
        it("should return the dataStore",function() {
            list.append("Batman");
            expect(list.toString()).toContain('Batman');
        });
    });

    describe("insert" ,function() {
        it("should insert element at the desired position",function() {
            list.append("Superman");
            list.append("Batman");
            list.append("Spiderman");
            var inserted = list.insert("Ironman","Batman");
            expect(list.find("Ironman")).toEqual(2);
        });

        it("should return true after successfull insertion",function() {
            list.append("Superman");
            list.append("Batman");
            list.append("Spiderman");
            var inserted = list.insert("Ironman","Batman");
            expect(inserted).toBe(true);
        });

        it("should return false after un-successfull insertion", function() {
            var inserted = list.insert("Ironman","Superman");
            expect(inserted).toBe(false);
        });

        it("should increment listSize after successfull insertion", function() {
            list.append("Batman");
            list.insert("Ironman","Batman");
            expect(list.listSize).toEqual(2);
        });


    });

    describe("append",function() {
        it("should add the element at the end of the list",function() {
            list.append("Batman");
            expect(list.find("Batman")).toEqual(0);
        });

        it("should increment the listSize", function() {
            list.append("Batman");
            expect(list.listSize).toEqual(1);
        });
    });


    describe("remove",function() {
        it("should return true for successfull removal",function() {
            list.append("Batman");
            var removed = list.remove("Batman");
            expect(removed).toBe(true);
        });

        it("should return false for un-successfull removal", function() {
            var removed = list.remove("Batman");
            expect(removed).toBe(false);
        });

        it("should remove the element from the list", function(){
            list.append("Batman");
            list.remove("Batman");
            expect(list.find("Batman")).toEqual(-1);
        });

        it("should decrement the listSize after successfull removal", function() {
            list.append("Ironman");
            list.append("Batman");
            list.remove("Batman");
            expect(list.listSize).toEqual(1);
        });


    });


    describe("first",function() {
        it("should set the pos to 0",function(){
            list.first();
            expect(list.pos).toEqual(0);
        });

    });

    describe("last",function() {
        it("should set the pos to the index of the last element",function() {
            list.append("Ironman");
            list.append("Batman");
            list.last();
            expect(list.pos).toEqual(list.find("Batman"));
        });
    });

    describe("prev", function() {
        it("should decrement the pos", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            list.prev();
            expect(list.pos).toEqual(0);
        });

        it("should not decrement the pos if pos is <= 0", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(0);
            list.prev();
            expect(list.pos).toEqual(0);
        });

    });

    describe("next", function() {
        it("should increment the pos", function() {
            list.append("Ironman");
            list.append("Batman");
            list.next();
            expect(list.pos).toEqual(1);
        });

        it("should not increment the pos if pos is >= listSize", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            list.next();
            expect(list.pos).toEqual(1);
        });
    });

    describe("length",function() {
        it("should return the listSize", function() {
            list.append("Ironman");
            list.append("Batman");
            expect(list.length()).toEqual(2);
        });
    });

    describe("currPos",function() {
        it("should return the value of pos", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            expect(list.currPos()).toEqual(1);
        });

    });
    
    describe("moveTo",function() {
        it("should set the pos value", function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            expect(list.pos).toEqual(1);
        });
    });

    describe("getElement",function() {
        it("should return the elememnt at the current position",function() {
            list.append("Ironman");
            list.append("Batman");
            list.moveTo(1);
            expect(list.getElement()).toEqual("Batman");
        });

    });
    describe("contains",function() {
        it("should return true if element is found", function() {
            list.append("Ironman");
            list.append("Batman");
            expect(list.contains("Batman")).toBe(true);
        });

        it("should return false if element is not found", function() {
            expect(list.contains("Stan Lee")).toBe(false);
        });
    });

});
    
