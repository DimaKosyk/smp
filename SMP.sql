-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 29 2016 г., 17:59
-- Версия сервера: 5.5.48
-- Версия PHP: 5.5.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `SMP`
--

-- --------------------------------------------------------

--
-- Структура таблицы `notes`
--

CREATE TABLE IF NOT EXISTS `notes` (
  `note_id` int(11) NOT NULL,
  `title` char(60) NOT NULL,
  `content` text NOT NULL,
  `date` datetime NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `notes`
--

INSERT INTO `notes` (`note_id`, `title`, `content`, `date`, `user_id`) VALUES
(5, 'title 3', 'casdasdadasdas ', '2016-04-08 18:16:37', 11),
(7, 'Hello World!', ' My first note)', '2016-04-08 18:19:15', 12),
(8, 'Hello world', 'First note ', '2016-04-08 19:09:54', 13),
(10, 'adsasdas', ' dasdasdasdadakdjadnasjknhcukhajkcdhakcakhckcakjmkckckmandajcjdfcadgcahshabdhabdcajdnac dasdasdasdadakdjadnasjknhcukhajkcdhakcakhckcakjmkckckmandajcjdfcadgcahshabdhabdcajdnac dasdasdasdadakdjadnasjknhcukhajkcdhakcakhckcakjmkckckmandajcjdfcadgcahshabdhabdcajdnac dasdasdasdadakdjadnasjknhcukhajkcdhakcakhckcakjmkckckmandajcjdfcadgcahshabdhabdcajdnac dasdasdasdadakdjadnasjknhcukhajkcdhakcakhckcakjmkckckmandajcjdfcadgcahshabdhabdcajdnac', '2016-04-08 19:10:14', 13),
(12, 'tmp', 'new tmp note ', '2016-04-09 18:04:47', 13),
(13, 'tmp 2', 'new tmp2 note\r\n\r\n\r\n ', '2016-04-09 18:05:04', 13),
(14, 'Tile', 'New Note ', '2016-04-11 13:52:45', 12),
(18, 'sas', ' ', '2016-04-11 14:18:27', 12),
(19, '112', ' 1', '2016-04-18 13:52:13', 13),
(20, 'Новая зметка', ' текст', '2016-04-29 21:07:14', 15),
(23, 'sasa', ' saa', '2016-04-29 21:09:28', 12),
(25, 'dds', ' fsd', '2016-04-30 16:53:03', 16);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `name` char(50) NOT NULL,
  `password` char(255) NOT NULL,
  `email` char(50) NOT NULL,
  `user_id` int(20) unsigned NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`name`, `password`, `email`, `user_id`) VALUES
('username', '$2y$11$fjid0PC9230ncGIeL.5a.ufYWqNAryof7lMnb.ORsH3qHdy0aLHWi', 'Bes@mail.ru', 11),
('Vasya', '$2y$11$dQ/vAN81vkxemLHnTp8PJ.VUpNJd4N7ZFJph5AdXE77mytcPxtpS2', 'besmertn@bk.ru', 12),
('Dimon', '$2y$11$IzcgedYUdOwAil6od8O19.uwB5jFAcqLxKB3jW8ixxJKFBtMq/SkW', 'dimon@mail.ru', 13),
('qwerty', '$2y$11$HikL7ZFqY7byaBSD4MdE1u3063d/fKFpLW23lE50wRUOjj9J2kkpm', 'asdzxc@gmail.com', 14),
('asdfa', '$2y$11$1CnwonQ4sjxNERjOMvd/QOIudCLTPWHOwQncPVtro4m4qfcAY8M8u', 'asa@css', 15),
('qwerty1', '$2y$11$WEydbdwHRc0jMzTWPAWuAuTi3AuLD6SYUV/6gz1kkCQv1fLxdJLx.', 'lopata@mail.ru', 16);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`note_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `notes`
--
ALTER TABLE `notes`
  MODIFY `note_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
