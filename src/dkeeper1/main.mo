import List "mo:base/List";
import Debug "mo:base/Debug";

actor dkeeper1{

  public type Note={
    title:Text;
    content:Text;
  };

  stable var Notes:List.List<Note> = List.nil<Note>();

  public func createNotes(titleText: Text, contentText: Text)  {
    let newNotes:Note={
      title= titleText;
      content= contentText;
    };
    Notes:= List.push(newNotes , Notes);
    Debug.print(debug_show(Notes));
  };

  public query func readNotes():async [Note]{
    return List.toArray(Notes);
  };

  public func deleteNote(id:Nat){
    let listFront =  List.take(Notes, id );
    let listBack =  List.drop(Notes, id + 1);
    Notes:= List.append(listFront,listBack);
  };
};