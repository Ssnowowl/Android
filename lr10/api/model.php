<?php 
class Model {
	public static function getGroupsList() {
		return (new DB())->getArrFromQuery(
			"SELECT id, number, faculty, specialty, studentsQuantity
			FROM groups 
			order by number");
	}

	public static function editGroup($group) {
		return (new DB())->runQuery(
			"update groups set number = '". str_replace("'", "\'", $group['number'])."',
			 faculty = '" . str_replace("'", "\'", $group['faculty'])."',
			 specialty = '" . str_replace("'", "\'", $group['specialty'])."',
			 studentsQuantity = ".$group['studentsQuantity']."
			 where id = " . $group['id']);

	}

	public static function addGroup($group) {
		return (new DB())->runQuery(
			"insert into groups(number, faculty, specialty, studentsQuantity) 
			values('".$group['number']."', '" . str_replace("'", "\'", $group['faculty'])."',
			'" . str_replace("'", "\'", $group['specialty'])."',
			".$group['studentsQuantity'].")");
	}

	public static function removeGroup($group) {
		return (new DB())->runQuery(
			"delete from groups 
			where id = " . $group['id']);
	}

	public static function getStudents($groupId) {
		return (new DB())->getArrFromQuery(
			"SELECT id, name, group_id, rating, code 
			FROM `students` 
			where group_id=$groupId order by name");
	}
}