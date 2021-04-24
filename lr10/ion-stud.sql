-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 21 2021 г., 20:34
-- Версия сервера: 8.0.19
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ion-stud`
--

-- --------------------------------------------------------

--
-- Структура таблицы `groups`
--

CREATE TABLE `groups` (
  `id` int NOT NULL,
  `number` varchar(100) NOT NULL,
  `faculty` varchar(100) NOT NULL,
  `specialty` varchar(100) NOT NULL,
  `studentsQuantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `groups`
--

INSERT INTO `groups` (`id`, `number`, `faculty`, `specialty`, `studentsQuantity`) VALUES
(1, 'Candy Crush', 'Sweets', 'Candy', 34),
(2, 'Loffles', 'Sweets', 'Waffles ', 45);

-- --------------------------------------------------------

--
-- Структура таблицы `students`
--

CREATE TABLE `students` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `group_id` int NOT NULL,
  `rating` int NOT NULL,
  `code` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `students`
--

INSERT INTO `students` (`id`, `name`, `group_id`, `rating`, `code`) VALUES
(1, 'Candy Coconut', 1, 5, 1),
(2, 'Loffles Coconut', 2, 4, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `token`) VALUES
(1, 'admin', 'c4ca4238a0b923820dcc509a6f75849b', '0fce84387f5c0b51fbe27d5485f1ddd33db543d4e52af79e590bc70a8483b89acd14b06710302e2a0474b7f7eee3889d0fa8');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_group_id` (`group_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `students`
--
ALTER TABLE `students`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `fk_group_id` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
